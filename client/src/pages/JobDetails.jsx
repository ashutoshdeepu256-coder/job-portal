import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  MapPin,
  IndianRupee,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

export default function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

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

  const applyJob = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.post(
        `/applications/apply/${id}`, // ✅ Fixed Route
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);

    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Application Failed");
    }
  };

  if (!job)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen text-white px-6 py-12">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10">

        <div className="flex justify-between items-start">

          <div>
            <h1 className="text-5xl font-black">
              {job.title}
            </h1>

            <p className="text-slate-400 mt-3 flex items-center gap-2">
              <Building2 size={18} />
              {job.company}
            </p>
          </div>

          <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
            {job.jobType}
          </span>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <MapPin className="mb-3" />
            <p>{job.location}</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <IndianRupee className="mb-3" />
            <p>{job.salary}</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
            <BriefcaseBusiness className="mb-3" />
            <p>{job.experienceLevel}</p>
          </div>

        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-5">
            Job Description
          </h2>

          <p className="text-slate-300 leading-8">
            {job.description}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-5">
            Requirements
          </h2>

          <p className="text-slate-300 leading-8">
            {job.requirements}
          </p>
        </div>

        <button
          onClick={applyJob}
          className="mt-14 w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-xl hover:scale-105 transition"
        >
          Apply Now 🚀
        </button>

      </div>
    </div>
  );
}