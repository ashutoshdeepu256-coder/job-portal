import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Adobe",
];

function CompanyLogos() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-400 uppercase tracking-[5px] mb-12">
          Trusted by Top Companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/8 border bg-white/15 backdrop-blur-xl rounded-2xl py-6 text-center hover:scale-105 hover:border-cyan-400 transition"
            >
              <h3 className="text-lg font-semibold">{company}</h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CompanyLogos;