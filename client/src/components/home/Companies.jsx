const companies = [
  "GOOGLE",
  "MICROSOFT",
  "AMAZON",
  "NETFLIX",
  "ADOBE",
  "APPLE",
  "META",
  "IBM",
  "TCS",
  "INFOSYS",
];

export default function Companies() {
  return (
    <section className="py-16">
      <p className="text-center uppercase tracking-[6px] text-slate-400 mb-10">
        Trusted By Top Companies
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {companies.map((company) => (
          <div
            key={company}
            className="rounded-2xl border border-white/10 bg-white/10 px-10 py-5"
          >
            <h2 className="text-xl font-bold text-slate-300">
              {company}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}