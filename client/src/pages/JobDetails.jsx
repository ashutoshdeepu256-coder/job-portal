import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const { data } = await api.get(`/jobs/${id}`);
      setJob(data.job);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApply = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.post(
        `/applications/apply/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Application Failed"
      );
    }
  };

  if (!job) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>{job.title}</h1>

      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Job Type:</strong> {job.jobType}</p>
      <p><strong>Experience:</strong> {job.experienceLevel}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Requirements:</strong> {job.requirements}</p>

      <button
        onClick={handleApply}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;