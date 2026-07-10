const express = require("express");
const router = express.Router();

const {
  protect,
  isStudent,
  isRecruiter,
} = require("../middleware/authMiddleware");

const {
  applyJob,
  getMyApplications,
  getApplicantsByJob,
  updateApplicationStatus,
} = require("../controllers/applicationController");

// Student Routes
router.post("/apply/:jobId", protect, isStudent, applyJob);
router.get("/my-applications", protect, isStudent, getMyApplications);

// Recruiter Routes
router.get("/job/:jobId", protect, isRecruiter, getApplicantsByJob);

router.put(
  "/status/:id",
  protect,
  isRecruiter,
  updateApplicationStatus
);

module.exports = router;