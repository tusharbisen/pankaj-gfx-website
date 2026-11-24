# Pankaj GFX architecture — Phase 2

## Current baseline

The application is a Next.js App Router site with no existing database, API, authentication, or file storage. The implementation starts with MongoDB and Mongoose, as proposed in the project brief. The database is only opened by server code that calls `connectToDatabase`; no connection string is checked into the repository.

## Data model

- `Request`: shared request lifecycle for printing, government assistance, photography, graphic design, thermocol, document service, and general inquiries. It includes customer contact, constrained service details, status, payment state, timestamps, attachment metadata and status history.
- `Scheme`: publication and verification are separate flags. New schemes default to unpublished and unverified. Official references, verification date, and verifier are retained.
- `Service`: availability, category, optional pricing and link to public media.
- `AdminUser`: email, password hash (excluded from normal query selection), role and active state. No default account or public registration is provided.
- `Media`: public gallery metadata and Cloudinary asset identity only; private customer uploads do not use this collection.
- `BusinessSetting`: one configurable business record, including enabled services and a document retention period.

Request history marks each entry as customer-visible or admin-only. Admin and customer API response mappers must explicitly select allowed fields; database selection alone is not a substitute for response authorization. Request attachment records contain an opaque storage key and purge date, never a public URL.

## API boundary

Planned public endpoints should be limited to published service/scheme reads, validated request creation and verified request tracking. Admin endpoints should be grouped under `/api/admin/*` and require server-side session and role checks on every operation. Public tracking must require both a request identifier and a separate customer verification value; an identifier alone is not authorization. All list endpoints require pagination and bounded filters.

Validate request bodies at the server boundary, enforce per-route rate limits, and generate request IDs on the server using cryptographically secure randomness. Avoid logging request bodies, credentials, contact details or document contents. Do not expose Mongoose documents directly from route handlers.

## Private document storage

`PrivateDocumentStorage` defines the provider boundary for customer documents. The provider is intentionally not selected or implemented yet. A production adapter must use private objects, opaque keys, short-lived authorized reads, deletion support, content and size checks, and a retention purge process. It must not return public permanent URLs. Cloudinary is reserved for public gallery/business media unless a separately reviewed private configuration is established.

## Authentication and operations

Admin authentication still needs implementation: password hashing, secure HTTP-only cookies, session rotation/expiry, login rate limiting, CSRF protections appropriate to the chosen cookie/session design, and authorization checks. Provision an owner out of band; do not add public admin registration or hardcoded credentials. Add audit events for sensitive admin actions before production.

## Configuration and deployment

`MONGODB_URI` is required at runtime and is documented with a placeholder in `.env.example`. Use a least-privilege database user and store the production URI only in the hosting environment. Hostinger plan limits and database connectivity must be checked against the selected plan before deployment. No Cloudinary, email, messaging or payment credentials are required for this phase.

## Not implemented in Phase 2

This foundation does not yet expose API routes, authenticate admins, accept uploads, generate customer request IDs, schedule purges, publish schemes, or connect to a configured database. Those features require their own server-side validation and security review in later phases.
