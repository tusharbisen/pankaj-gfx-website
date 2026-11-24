import { Schema, model, models } from "mongoose";

const SchemeSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 200 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true, maxlength: 80, index: true },
    governmentLevel: { type: String, enum: ["central", "state"], required: true, index: true },
    state: { type: String, trim: true, maxlength: 80 },
    shortDescription: { type: String, required: true, maxlength: 400 },
    description: { type: String, required: true, maxlength: 12000 },
    eligibility: [{ type: String, maxlength: 1000 }],
    benefits: [{ type: String, maxlength: 1000 }],
    requiredDocuments: [{ type: String, maxlength: 300 }],
    applicationSteps: [{ type: String, maxlength: 1000 }],
    deadline: { type: Date },
    officialUrl: { type: String, maxlength: 2048 },
    officialSources: [{ type: String, maxlength: 2048 }],
    officialHelpline: { type: String, maxlength: 200 },
    assistanceOffered: { type: String, maxlength: 2000 },
    faqs: [{ question: { type: String, maxlength: 300 }, answer: { type: String, maxlength: 2000 } }],
    status: { type: String, enum: ["active", "inactive"], default: "active", index: true },
    published: { type: Boolean, default: false, index: true },
    verified: { type: Boolean, default: false, index: true },
    lastVerifiedAt: { type: Date },
    verificationNotes: { type: String, maxlength: 3000, select: false },
    verifiedBy: { type: Schema.Types.ObjectId, ref: "AdminUser" },
  },
  { timestamps: true, strict: "throw" },
);

SchemeSchema.index({ published: 1, status: 1, verified: 1, category: 1 });
SchemeSchema.index({ name: "text", shortDescription: "text", description: "text" });

const Scheme = models.Scheme || model("Scheme", SchemeSchema);
export default Scheme;
