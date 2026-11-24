import { Schema, model, models } from "mongoose";

const BusinessSettingSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, default: "business" },
    name: { type: String, required: true, maxlength: 160 },
    phoneDisplay: { type: String, required: true, maxlength: 40 },
    whatsappNumber: { type: String, required: true, maxlength: 20 },
    email: { type: String, maxlength: 254 },
    address: { type: String, maxlength: 500 },
    businessHours: [{ type: String, maxlength: 120 }],
    socialLinks: [{ label: { type: String, maxlength: 80 }, url: { type: String, maxlength: 2048 } }],
    enabledServices: [{ type: String, maxlength: 80 }],
    documentRetentionDays: { type: Number, default: 30, min: 1, max: 365 },
  },
  { timestamps: true, strict: "throw" },
);

const BusinessSetting = models.BusinessSetting || model("BusinessSetting", BusinessSettingSchema);
export default BusinessSetting;
