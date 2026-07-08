import {
  ShieldCheck,
  Zap,
  BrainCircuit,
  Globe,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Job Matching",
    desc: "Smart recommendations based on your skills.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Companies",
    desc: "Every recruiter is manually verified.",
  },
  {
    icon: Zap,
    title: "Instant Apply",
    desc: "Apply for jobs in one click.",
  },
  {
    icon: Globe,
    title: "Remote Jobs",
    desc: "Find opportunities worldwide.",
  },
  {
    icon: Briefcase,
    title: "Premium Companies",
    desc: "Google, Microsoft, Amazon & more.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Track applications and improve hiring chances.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400">
            Why HireVerse
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Everything You Need
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Modern hiring platform with AI powered experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}