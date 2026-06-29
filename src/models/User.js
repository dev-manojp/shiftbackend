import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // Basic Auth Info
        name: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
            unique: true,
        },

        role: {
            type: String,
            enum: ["user", "business", "admin"],
            default: "user",
        },

        isPhoneVerified: {
            type: Boolean,
            default: false,
        },

        // =========================
        // Common Profile Fields
        // =========================

        city: {
            type: String,
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"],
        },

        profileImage: {
            type: String,
        },

        isProfileCompleted: {
            type: Boolean,
            default: false,
        },

        // =========================
        // Worker Fields
        // =========================

        skills: [
            {
                type: String,
            },
        ],

        availability: {
            type: String,
        },

        experience: {
            type: String,
        },

        // =========================
        // Business Fields
        // =========================

        ownerName: {
            type: String,
        },

        businessName: {
            type: String,
        },

        businessType: {
            type: String,
        },

        businessAddress: {
            type: String,
        },

        businessEmail: {
            type: String,
        },

        openingHours: {
            open: {
                type: String,
            },

            close: {
                type: String,
            },
        },

        businessLogo: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;