const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
} = require("../controllers/jobController");

const protect = require("../middleware/authMiddleware");

// Public Route
router.get("/", getAllJobs);

// Protected Route
router.post("/", protect, createJob);

module.exports = router;