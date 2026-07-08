import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function CreateJob() {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    requirements: "",
    jobType: "Full-Time",
    experienceLevel: "Fresher",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.post("/jobs", job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.message);
      navigate("/recruiter-dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h1>Create Job</h1>

      <input name="title" placeholder="Job Title" onChange={handleChange} />
      <br /><br />

      <input name="company" placeholder="Company" onChange={handleChange} />
      <br /><br />

      <input name="location" placeholder="Location" onChange={handleChange} />
      <br /><br />

      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <br /><br />

      <textarea
        name="requirements"
        placeholder="Requirements"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        Create Job
      </button>
    </div>
  );
}

export default CreateJob;