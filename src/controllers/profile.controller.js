import User from "../models/User.js";


// ============================================
// Complete Worker Profile
// ============================================

export const completeWorkerProfile = async (req, res) => {

  console.log("Received worker profile data:", req.body);

  try {
    const {
      name,
      city,
      gender,
      skills,
      profileImage,
      availability,
      experience,
    } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        city,
        gender,
        skills,
        profileImage,
        availability,
        experience,
        role: "worker",
        isProfileCompleted: true,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Worker profile completed successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ============================================
// Complete Business Profile
// ============================================

export const completeBusinessProfile = async (req, res) => {

  console.log("Received business profile data:", req.body);

  try {
    const {
      owner_name,
      business_name,
      business_type,
      business_address,
      email,
      opening_hours,
      business_logo,
      isProfileCompleted
    } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        ownerName: owner_name,
        businessName: business_name,
        businessType: business_type,
        businessAddress: business_address,
        businessEmail: email,
        openingHours: opening_hours,
        businessLogo: business_logo,
        isProfileCompleted: true,

      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Business profile completed successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ============================================
// Get My Profile
// ============================================

export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ============================================
// Update Profile
// ============================================

export const updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ============================================
// Check Profile Completion
// ============================================

export const checkProfileCompletion = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    return res.status(200).json({
      success: true,
      isProfileCompleted: user?.isProfileCompleted || false,
      role: user?.role || null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};