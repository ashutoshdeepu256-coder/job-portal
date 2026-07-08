import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-4xl font-black text-white">
              Hire
              <span className="text-cyan-400">
                Verse
              </span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              Modern AI Powered Hiring Platform connecting students and recruiters worldwide.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 mt-6">

              <Link to="/">Home</Link>

              <Link to="/jobs">Jobs</Link>

              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Company
            </h3>

            <div className="flex flex-col gap-4 mt-6 text-slate-400">

              <p>About Us</p>

              <p>Careers</p>

              <p>Privacy Policy</p>

              <p>Terms & Conditions</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="flex flex-col gap-4 mt-6 text-slate-400">

              <p>support@hireverse.com</p>

              <p>+91 9876543210</p>

              <p>New Delhi, India</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-slate-500">

          © 2026 HireVerse. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}