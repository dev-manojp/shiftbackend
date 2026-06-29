import admin from "../config/firebase.js";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


// export const firebaseLogin = async (req, res) => {

//     console.log("Firebase login request received", req.body);
//     try {
//         const { token, role, name } = req.body;

//         if (!token) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Token required",
//             });
//         }

//         const decodedToken = await admin
//             .auth()
//             .verifyIdToken(token);

//         const phone = decodedToken.phone_number || decodedToken.phoneNumber;

//         let user = await User.findOne({ phone });

//         if (!user) {
//             user = await User.create({
//                 phone,
//                 role,
//                 name: name || "user",
//                 isPhoneVerified: true,
//             });
//         }

//         const jwtToken = generateToken(user);

//         res.status(200).json({
//             success: true,
//             message: "Login successful",
//             token: jwtToken,
//             user,
//         });

//     } catch (error) {
//         console.log(error);

//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// }

export const signup = async (req, res) => {
    try {

        const { token, role, name } = req.body;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token required",
            });
        }

        const decodedToken = await admin
            .auth()
            .verifyIdToken(token);

        const phone =
            decodedToken.phone_number ||
            decodedToken.phoneNumber;

        if (!phone) {
            return res.status(400).json({
                success: false,
                message: "Phone number not found",
            });
        }

        if (!["worker", "business"].includes(role)) {
            return res.status(400).json({
                success: false,
                message: "Invalid role",
            });
        }

        // const existingUser = await User.findOne({ phone });

        // if (existingUser) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "User already exists",
        //     });
        // }

        const user = await User.create({
            phone,
            role,
            name,
            isPhoneVerified: true,
        });

        const jwtToken = generateToken(user);

        res.status(201).json({
            success: true,
            message: "Signup successful",
            token: jwtToken,
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const loginUser = async (req, res) => {
    try {

        const { token } = req.body;

        // console.log("Login request received", token);

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token required",
            });
        }

        const decodedToken = await admin
            .auth()
            .verifyIdToken(token);

        const phone =
            decodedToken.phone_number ||
            decodedToken.phoneNumber;

        if (!phone) {
            return res.status(400).json({
                success: false,
                message: "Phone number not found",
            });
        }

        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Account not found. Please signup first.",
            });
        }

        console.log("User found:", user);

        const jwtToken = generateToken(user);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token: jwtToken,
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};