import { useEffect, useState } from "react";
import api from "../services/api";

function StudentDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/applications/my-applications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApplications(data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🎓 Student Dashboard</h1>

      <h2>My Applications</h2>

      {applications.length === 0 ? (
        <p>No Applications Yet</p>
      ) : (
        applications.map((app) => (
          <div
            key={app._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{app.job.title}</h3>

            <p>
              <strong>Company:</strong> {app.job.company}
            </p>

            <p>
              <strong>Location:</strong> {app.job.location}
            </p>

            <p>
              <strong>Status:</strong> {app.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentDashboard;