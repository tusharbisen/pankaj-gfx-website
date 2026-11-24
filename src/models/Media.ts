import { Schema, model, models } from "mongoose";

const MediaSchema = new Schema(
  {
    provider: { type: String, enum: ["cloudinary"], required: true },
    publicId: { type: String, required: true, maxlength: 256 },
    resourceType: { type: String, enum: ["image", "video"], required: true },
    category: { type: String, required: true, trim: true, maxlength: 80, index: true },
    title: { type: String, required: true, maxlength: 180 },
    description: { type: String, maxlength: 1000 },
    featured: { type: Boolean, default: false, index: true },
    published: { type: Boolean, default: false, index: true },
    sortOrder: { type: Number, default: 0 },
    width: { type: Number, min: 1 },
    height: { type: Number, min: 1 },
  },
  { timestamps: true, strict: "throw" },
);

MediaSchema.index({ published: 1, category: 1, sortOrder: 1 });
MediaSchema.index({ provider: 1, publicId: 1 }, { unique: true });

const Media = models.Media || model("Media", MediaSchema);
export default Media;
