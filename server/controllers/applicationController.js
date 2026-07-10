const Application = require("../models/Application");
const Job = require("../models/Job");

// Apply Job
const applyJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;

    // Check job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Check already applied
    const alreadyApplied = await Application.findOne({
      job: jobId,
      student: req.user.id,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "Already Applied",
      });
    }

    // Create application
    const application = await Application.create({
      job: jobId,
      student: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Applied Successfully",
      application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Applications
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      student: req.user.id,
    })
      .populate("job")
      .populate("student", "name email");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Applicants for a Job
const getApplicantsByJob = async (req, res) => {
  try {
    const applications = await Application.find({
      job: req.params.jobId,
    })
      .populate("student", "name email role resume")
      .populate("job", "title company");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Application Status
const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    application.status = status;

    await application.save();

    res.status(200).json({
      success: true,
      message: "Status Updated",
      application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  applyJob,
  getMyApplications,
  getApplicantsByJob,
  updateApplicationStatus,
};