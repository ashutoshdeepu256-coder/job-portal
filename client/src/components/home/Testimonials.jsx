import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    company: "Google",
    review:
      "HireVerse helped me land my dream job within just two weeks. The experience was amazing.",
  },
  {
    name: "Priya Singh",
    role: "Backend Engineer",
    company: "Microsoft",
    review:
      "Beautiful UI and very smooth application process. Highly recommended for freshers.",
  },
  {
    name: "Aman Verma",
    role: "MERN Developer",
    company: "Amazon",
    review:
      "The AI job recommendations were surprisingly accurate. Loved the platform.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Loved by Developers
          </h2>

          <p className="mt-5 text-slate-400">
            Thousands of candidates trust HireVerse.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-3"
            >
              <div className="flex gap-1 text-yellow-400">
                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} size={18} fill="currentColor"/>
                ))}
              </div>

              <p className="mt-6 text-slate-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-white font-bold">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}