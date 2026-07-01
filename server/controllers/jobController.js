const Job = require("../models/Job");

// Create Job
const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      description,
      requirements,
      jobType,
      experienceLevel,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      salary,
      description,
      requirements,
      jobType,
      experienceLevel,
      postedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Job Created Successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createJob,
  getAllJobs,
};