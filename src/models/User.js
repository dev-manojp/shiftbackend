import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },

        phone: {
            type: String,
            required: true,
            unique: true,
        },

        role: {
            type: String,
            enum: ["worker", "business", "admin"],
            default: "worker",
        },

        isPhoneVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;