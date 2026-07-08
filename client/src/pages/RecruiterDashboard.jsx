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
  <div className="min-h-screen px-8 py-10 text-white">
    <div className="max-w-7xl mx-auto">

      <div className="mb-10">
        <h1 className="text-5xl font-black">
          Recruiter Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Manage all your posted jobs in one place.
        </p>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-slate-400">Total Jobs</p>

          <h2 className="text-5xl font-black mt-3">
            {jobs.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-slate-400">
            Active Jobs
          </p>

          <h2 className="text-5xl font-black mt-3 text-cyan-400">
            {jobs.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-slate-400">
            Applications
          </p>

          <h2 className="text-5xl font-black mt-3 text-green-400">
            --
          </h2>
        </div>

      </div>

      {/* Jobs */}

      <div className="grid lg:grid-cols-2 gap-8">

        {jobs.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/20 p-12 text-center text-slate-400">
            No Jobs Posted Yet
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-3xl font-bold">
                    {job.title}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {job.company}
                  </p>

                </div>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                  {job.jobType || "Full-Time"}
                </span>

              </div>

              <div className="mt-8 space-y-3">

                <p>
                  📍 {job.location}
                </p>

                <p>
                  💰 {job.salary}
                </p>

                <p>
                  ⭐ {job.experienceLevel || "Fresher"}
                </p>

              </div>

              <div className="flex gap-4 mt-10">

                <Link
                  to={`/jobs/${job._id}`}
                  className="flex-1"
                >
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold"
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  </div>
);
}
export default RecruiterDashboard;