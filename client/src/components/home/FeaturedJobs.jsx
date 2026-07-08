import { Link } from "react-router-dom";
import { MapPin, IndianRupee, Briefcase } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "18 LPA",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "20 LPA",
    type: "Remote",
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "Amazon",
    location: "Noida",
    salary: "15 LPA",
    type: "Hybrid",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[5px]">
            Featured Jobs
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Latest Opportunities
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Explore hand-picked jobs from top companies around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Briefcase className="text-white" />
                </div>

                <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-300">
                  {job.type}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {job.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {job.company}
              </p>

              <div className="mt-8 space-y-3">

                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin size={18} />
                  {job.location}
                </div>

                <div className="flex items-center gap-3 text-green-400">
                  <IndianRupee size={18} />
                  {job.salary}
                </div>

              </div>

              <Link
                to="/jobs"
                className="mt-10 inline-block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white transition hover:scale-105"
              >
                View Details
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}