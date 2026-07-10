import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

export default function EditJob() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const { data } = await api.get(`/jobs/${id}`);
      setJob(data.job);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.put(`/jobs/${id}`, job, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.message);

      navigate("/recruiter-dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-12">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10">

        <h1 className="text-4xl text-white font-black mb-8">
          Edit Job
        </h1>

        <div className="grid gap-5">

          <input
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Title"
            className="h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-white"
          />

          <input
            name="company"
            value={job.company}
            onChange={handleChange}
            placeholder="Company"
            className="h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-white"
          />

          <input
            name="location"
            value={job.location}
            onChange={handleChange}
            placeholder="Location"
            className="h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-white"
          />

          <input
            name="salary"
            value={job.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-white"
          />

          <textarea
            rows="5"
            name="description"
            value={job.description}
            onChange={handleChange}
            placeholder="Description"
            className="rounded-xl bg-white/5 border border-white/10 p-5 text-white"
          />

          <textarea
            rows="5"
            name="requirements"
            value={job.requirements}
            onChange={handleChange}
            placeholder="Requirements"
            className="rounded-xl bg-white/5 border border-white/10 p-5 text-white"
          />

          <button
            onClick={handleUpdate}
            className="h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold"
          >
            Update Job
          </button>

        </div>

      </div>
    </div>
  );
}