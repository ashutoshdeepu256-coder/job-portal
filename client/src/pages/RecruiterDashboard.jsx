import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get("/jobs");
      setJobs(data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.delete(`/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.message);

      // Refresh jobs list
      fetchJobs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🏢 Recruiter Dashboard</h1>

      <h2>Posted Jobs</h2>

      {jobs.length === 0 ? (
        <p>No Jobs Posted</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>

            <div style={{ marginTop: "15px" }}>
              <Link to={`/jobs/${job._id}`}>
                <button
                  style={{
                    marginRight: "10px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  View
                </button>
              </Link>

              <button
                onClick={() => handleDelete(job._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecruiterDashboard;