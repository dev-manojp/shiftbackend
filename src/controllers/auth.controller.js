import admin from "../config/firebase.js";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const testLogin = async (req, res) => {
    try {
        const { phone, role } = req.body;

        let user = await User.findOne({ phone });

        if (!user) {
            user = await User.create({
                name: "Test User",
                phone,
                role,
                isPhoneVerified: true,
            });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: "Test login successful",
            token,
            user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const firebaseLogin = async (req, res) => {
    try {
        const { token, role } = req.body;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token required",
            });
        }

        const decodedToken = await admin
            .auth()
            .verifyIdToken(token);

        const phone = decodedToken.phone_number;

        let user = await User.findOne({ phone });

        if (!user) {
            user = await User.create({
                phone,
                role,
                isPhoneVerified: true,
            });
        }

        const jwtToken = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token: jwtToken,
            user,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}