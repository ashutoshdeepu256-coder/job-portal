import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import {
  MapPin,
  IndianRupee,
  Building2,
  BriefcaseBusiness,
  Search,
} from "lucide-react";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

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

        <div className="relative max-w-xl mx-auto mb-14">

          <Search
            className="absolute left-5 top-4 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search Jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl h-14 text-lg pl-14 pr-5 outline-none focus:border-cyan-400"
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {filteredJobs.length === 0 ? (
            <div className="col-span-2 text-center text-slate-400 text-xl">
              No Jobs Found
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job._id}
                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >

                <div className="flex justify-between items-center">

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

                  <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                    {job.jobType || "Full-Time"}
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-5 mt-8">

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

                    {job.experienceLevel || "Fresher"}

                  </div>

                </div>

                <Link to={`/jobs/${job._id}`}>

                  <button className="mt-10 w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition">
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