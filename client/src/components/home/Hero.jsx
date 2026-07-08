import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto min-h-[90vh] px-6 flex flex-col lg:flex-row items-center justify-between">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            🚀 AI Powered Hiring Platform
          </div>

          <h1 className="mt-8 text-6xl lg:text-8xl font-black leading-tight">
            Find Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-400 leading-9">
            Discover thousands of verified jobs from top companies.
          </p>

          <div className="mt-10 flex rounded-2xl overflow-hidden border bg-white/15 bg-white/8 backdrop-blur-xl">

            <input
              placeholder="Search jobs..."
              className="flex-1 bg-transparent px-6 py-5 outline-none"
            />

            <button className="bg-cyan-500 hover:bg-cyan-400 px-8 transition">
              <Search />
            </button>

          </div>

          <div className="mt-8 flex gap-5">

            <Link
              to="/jobs"
              className="rounded-xl bg-cyan-500 px-8 h-14 text-lg font-semibold hover:scale-105 transition"
            >
              Explore Jobs
            </Link>

            <Link
              to="/register"
              className="rounded-xl border border-white/20 px-8 h-14 text-lg hover:border-cyan-400 transition flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18}/>
            </Link>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity:0, x:80 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          className="hidden lg:flex lg:w-1/2 justify-center"
        >

          <div className="relative">

            <div className="w-[450px] rounded-[35px] border bg-white/15 bg-white/8 backdrop-blur-2xl p-8 shadow-2xl">

              <div className="flex justify-between">

                <div>
                  <h2 className="text-3xl font-bold">
                    Frontend Engineer
                  </h2>

                  <p className="text-slate-400">
                    Google • Remote
                  </p>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-cyan-500"></div>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-slate-900 p-5">

                  <p className="text-slate-400">
                    Salary
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    ₹18LPA
                  </h3>

                </div>

                <div className="rounded-2xl bg-slate-900 p-5">

                  <p className="text-slate-400">
                    Experience
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    2+ Years
                  </h3>

                </div>

              </div>

              <button className="mt-10 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 h-14 text-lg font-bold">
                Apply Now
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}