import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Jobs() {
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

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Jobs</h1>

      {jobs.length === 0 ? (
        <p>No Jobs Available</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>{job.title}</h2>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
           <Link to={`/jobs/${job._id}`}>
  <button
    style={{
      marginTop: "10px",
      padding: "8px 15px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    View Details
  </button>
</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Jobs;