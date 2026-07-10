import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-3xl bg-slate-950/60 border-b bg-white/15"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-cyan-500 p-3 rounded-xl shadow-lg shadow-cyan-500/40">
            <FaBriefcase className="text-white text-xl"/>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              HireVerse
            </h1>

            <p className="text-xs text-gray-400">
              AI Powered Hiring
            </p>
          </div>
        </Link>

        {/* Menu */}

        <div className="flex items-center gap-8">

          <Link
            className="text-gray-300 hover:text-cyan-400 transition"
            to="/"
          >
            Home
          </Link>

          <Link
            className="text-gray-300 hover:text-cyan-400 transition"
            to="/jobs"
          >
            Jobs
          </Link>

          {!user && (
            <>
              <Link
                className="text-gray-300 hover:text-cyan-400 transition"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-xl font-semibold"
                to="/register"
              >
                Register
              </Link>
            </>
          )}

          {user?.role === "student" && (
  <>
    <Link
      className="text-gray-300 hover:text-cyan-400 transition"
      to="/student-dashboard"
    >
      Dashboard
    </Link>

    <Link
      className="text-gray-300 hover:text-cyan-400 transition"
      to="/profile"
    >
      Profile
    </Link>
  </>
)}

          {user?.role === "recruiter" && (
  <>
    <Link
      className="text-gray-300 hover:text-cyan-400 transition"
      to="/create-job"
    >
      Create Job
    </Link>

    <Link
      className="text-gray-300 hover:text-cyan-400 transition"
      to="/recruiter-dashboard"
    >
      Dashboard
    </Link>

    <Link
      className="text-gray-300 hover:text-cyan-400 transition"
      to="/profile"
    >
      Profile
    </Link>
  </>
)}

          {user && (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all px-5 py-2 rounded-xl font-semibold shadow-lg shadow-cyan-500/30"
            >
              <FiLogOut/>

              Logout
            </button>
          )}

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;