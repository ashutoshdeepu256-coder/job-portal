import { motion } from "framer-motion";
import { Briefcase, MapPin, IndianRupee } from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-24 right-10 hidden xl:block"
      >
        <div className="w-72 rounded-3xl border bg-white/15 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold">Frontend Engineer</h3>
              <p className="text-slate-400">Google</p>
            </div>

            <Briefcase className="text-cyan-400" />
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Bangalore</span>
            </div>

            <div className="flex items-center gap-2 text-green-400">
              <IndianRupee size={16} />
              <span>18 LPA</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-semibold hover:bg-cyan-400 transition">
            Apply
          </button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-28 right-48 hidden xl:block"
      >
        <div className="rounded-3xl border bg-white/15 bg-white/10 backdrop-blur-2xl px-8 py-6">
          <h2 className="text-4xl font-black text-cyan-400">50K+</h2>
          <p className="text-slate-400">Active Students</p>
        </div>
      </motion.div>
    </>
  );
}