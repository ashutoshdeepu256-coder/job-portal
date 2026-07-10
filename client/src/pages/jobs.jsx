import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

import {
  Search,
  Heart,
  MapPin,
  IndianRupee,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    fetchJobs();
  }, [keyword, location, jobType, salary]);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get("/jobs", {
        params: {
          keyword,
          location,
          jobType,
          salary,
        },
      });

      setJobs(data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const saveJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return toast.error("Please Login First");
      }

      const { data } = await api.post(
        `/users/save-job/${jobId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Unable to Save Job"
      );
    }
  };

  return (
    <div className="min-h-screen text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-6xl font-black">
            Find Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Dream Job
            </span>
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Browse premium opportunities from top companies.
          </p>

        </div>

        {/* Filters */}

        <div className="grid lg:grid-cols-4 gap-4 mb-10">

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search Job..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full h-14 pl-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl outline-none focus:border-cyan-400"
            />

          </div>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl px-5 outline-none focus:border-cyan-400"
          />

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl px-5 outline-none"
          >
            <option value="">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>

          <input
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl px-5 outline-none focus:border-cyan-400"
          />

        </div>

        {/* Clear Filters */}

        <div className="flex justify-end mb-10">

          <button
            onClick={() => {
              setKeyword("");
              setLocation("");
              setJobType("");
              setSalary("");
            }}
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
          >
            Clear Filters
          </button>

        </div>

        {/* Jobs Count */}

        <h2 className="text-2xl font-bold mb-8">
          {jobs.length} Jobs Found
        </h2>

        {/* Jobs */}

        <div className="grid lg:grid-cols-2 gap-8">

          {jobs.length === 0 ? (

            <div className="col-span-full rounded-3xl border border-dashed border-white/20 p-16 text-center">

              <h2 className="text-3xl font-bold mb-3">
                No Jobs Found 😔
              </h2>

              <p className="text-slate-400">
                Try changing your filters.
              </p>

            </div>

          ) : (

            jobs.map((job) => (

              <div
                key={job._id}
                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >

                <div className="flex justify-between items-start">

                  <div className="flex gap-4 items-center">

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Building2 size={30} />
                    </div>

                    <div>

                      <h2 className="text-3xl font-bold">
                        {job.title}
                      </h2>

                      <p className="text-slate-400">
                        {job.company}
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={() => saveJob(job._id)}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 transition flex items-center justify-center"
                  >
                    <Heart size={22} />
                  </button>

                </div>

                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <IndianRupee size={18} />
                    {job.salary}
                  </div>

                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness size={18} />
                    {job.jobType || "Full-Time"}
                  </div>

                  <div className="flex items-center gap-2">
                    ⭐ {job.experienceLevel || "Fresher"}
                  </div>

                </div>

                <Link to={`/jobs/${job._id}`}>

                  <button className="mt-10 w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition">

                    View Details

                  </button>

                </Link>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Jobs;