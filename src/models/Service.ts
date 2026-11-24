import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 160 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true, maxlength: 80, index: true },
    summary: { type: String, required: true, maxlength: 400 },
    description: { type: String, required: true, maxlength: 8000 },
    available: { type: Boolean, default: true, index: true },
    featured: { type: Boolean, default: false, index: true },
    pricingType: { type: String, enum: ["fixed", "starting-at", "quote-only"] },
    priceMinor: { type: Number, min: 0 },
    currency: { type: String, default: "INR", enum: ["INR"] },
    thumbnailMediaId: { type: Schema.Types.ObjectId, ref: "Media" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true, strict: "throw" },
);

ServiceSchema.index({ available: 1, featured: -1, sortOrder: 1 });
ServiceSchema.index({ name: "text", summary: "text", description: "text" });

const Service = models.Service || model("Service", ServiceSchema);
export default Service;
