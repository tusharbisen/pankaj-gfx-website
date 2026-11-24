import { Schema, model, models } from "mongoose";

const AdminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 254 },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ["owner", "admin"], default: "admin", required: true },
    active: { type: Boolean, default: true, required: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true, strict: "throw" },
);

const AdminUser = models.AdminUser || model("AdminUser", AdminUserSchema);
export default AdminUser;
