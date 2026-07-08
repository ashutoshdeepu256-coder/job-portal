import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-xl p-14 text-center">

          <h2 className="text-5xl font-black text-white">
            Ready to Build Your Career?
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Join thousands of students and recruiters using HireVerse.
          </p>

          <Link
            to="/register"
            className="inline-block mt-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 h-14 text-lg text-lg font-bold text-white transition hover:scale-105"
          >
            Get Started →
          </Link>

        </div>

      </div>
    </section>
  );
}