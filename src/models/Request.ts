import { Schema, model, models } from "mongoose";

export const REQUEST_TYPES = [
  "printing",
  "government-assistance",
  "photography",
  "graphic-design",
  "thermocol-design",
  "document-service",
  "general-inquiry",
] as const;

export const REQUEST_STATUSES = [
  "new",
  "reviewed",
  "quoted",
  "awaiting-customer-confirmation",
  "processing",
  "ready-for-pickup",
  "completed",
  "cancelled",
] as const;

export const PAYMENT_STATUSES = [
  "unpaid",
  "quoted",
  "partially-paid",
  "paid",
  "refunded",
] as const;

const RequestHistorySchema = new Schema(
  {
    status: { type: String, enum: REQUEST_STATUSES, required: true },
    message: { type: String, maxlength: 1000 },
    visibility: { type: String, enum: ["customer", "admin"], required: true },
    actor: { type: String, enum: ["system", "admin"], required: true },
    createdAt: { type: Date, default: Date.now, required: true },
  },
  { _id: false },
);

const AttachmentSchema = new Schema(
  {
    // Opaque provider key only. Never store or return a public delivery URL here.
    storageKey: { type: String, required: true, maxlength: 256 },
    originalName: { type: String, required: true, maxlength: 180 },
    contentType: { type: String, required: true, maxlength: 100 },
    sizeBytes: { type: Number, required: true, min: 1 },
    uploadedAt: { type: Date, default: Date.now, required: true },
    purgeAt: { type: Date, required: true },
  },
  { _id: true },
);

const RequestDetailsSchema = new Schema(
  {
    serviceSlug: { type: String, maxlength: 100 },
    eventType: { type: String, maxlength: 100 },
    eventDate: { type: Date },
    eventLocation: { type: String, maxlength: 300 },
    schemeId: { type: Schema.Types.ObjectId, ref: "Scheme" },
    message: { type: String, maxlength: 3000 },
    printOptions: {
      colorMode: { type: String, enum: ["black-and-white", "color"] },
      paperSize: { type: String, enum: ["A4", "A3", "other"] },
      sides: { type: String, enum: ["single", "double"] },
      copies: { type: Number, min: 1, max: 10000 },
      paperType: { type: String, maxlength: 80 },
      fulfilment: { type: String, enum: ["pickup", "delivery"] },
    },
  },
  { _id: false, strict: "throw" },
);

const RequestSchema = new Schema(
  {
    requestId: { type: String, required: true, unique: true, index: true, maxlength: 32 },
    type: { type: String, enum: REQUEST_TYPES, required: true, index: true },
    customer: {
      name: { type: String, required: true, trim: true, maxlength: 120 },
      phone: { type: String, required: true, trim: true, maxlength: 20, index: true },
      email: { type: String, trim: true, lowercase: true, maxlength: 254 },
    },
    details: { type: RequestDetailsSchema, required: true },
    status: { type: String, enum: REQUEST_STATUSES, default: "new", required: true, index: true },
    history: { type: [RequestHistorySchema], default: [] },
    attachments: { type: [AttachmentSchema], default: [] },
    customerNotes: { type: String, maxlength: 2000 },
    internalNotes: { type: String, maxlength: 5000, select: false },
    quotedPriceMinor: { type: Number, min: 0 },
    currency: { type: String, default: "INR", enum: ["INR"] },
    paymentStatus: { type: String, enum: PAYMENT_STATUSES, default: "unpaid" },
    completedAt: { type: Date },
  },
  { timestamps: true, strict: "throw" },
);

RequestSchema.index({ type: 1, status: 1, createdAt: -1 });
RequestSchema.index({ "customer.name": 1 });
RequestSchema.index({ "attachments.purgeAt": 1 });

const Request = models.Request || model("Request", RequestSchema);
export default Request;
