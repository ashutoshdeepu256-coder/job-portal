import { Users, Briefcase, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50K+",
    title: "Students",
  },
  {
    icon: Briefcase,
    number: "10K+",
    title: "Jobs",
  },
  {
    icon: Building2,
    number: "1200+",
    title: "Companies",
  },
  {
    icon: Award,
    number: "98%",
    title: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300"
              >
                <Icon size={45} className="text-cyan-400" />

                <h2 className="mt-8 text-5xl font-black text-white">
                  {item.number}
                </h2>

                <p className="mt-4 text-slate-400 text-lg">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}