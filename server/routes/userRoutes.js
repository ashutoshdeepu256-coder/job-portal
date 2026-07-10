const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const User = require("../models/User");

const {
  registerUser,
  loginUser,
  saveJob,
  getSavedJobs,
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Profile
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed",
    user: req.user,
  });
});

// Upload Resume
router.put(
  "/upload-resume",
  protect,
  upload.single("resume"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please select a resume file",
        });
      }

      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      user.resume = req.file.filename;

      await user.save();

      res.status(200).json({
        success: true,
        message: "Resume Uploaded Successfully",
        resume: user.resume,
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);
// Save Job
router.post(
  "/save-job/:jobId",
  protect,
  saveJob
);

// Get Saved Jobs
router.get(
  "/saved-jobs",
  protect,
  getSavedJobs
);
module.exports = router;