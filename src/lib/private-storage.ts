/**
 * Contract for private customer-document storage.
 * Implement with a private bucket/provider after configuration is selected.
 * Implementations must never return permanent public delivery URLs.
 */
export interface PrivateDocumentStorage {
  put(input: {
    requestId: string;
    fileName: string;
    contentType: string;
    content: ReadableStream<Uint8Array>;
  }): Promise<{ storageKey: string }>;
  createReadAccess(storageKey: string, expiresInSeconds: number): Promise<string>;
  delete(storageKey: string): Promise<void>;
}
