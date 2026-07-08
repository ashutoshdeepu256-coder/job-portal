import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const { data } = await api.post("/users/register", formData);

      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-12 md:p-14 shadow-2xl">

        <h1 className="text-5xl font-black text-center text-white">
          Create Account 🚀
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Join HireVerse today
        </p>

        <div className="mt-12 space-y-6">

          <div className="relative">
            <User className="absolute left-4 top-4 text-slate-400" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/5 border border-white/10 h-14 pl-14 pr-5 text-lg text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-slate-400" />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/5 border border-white/10 h-14 pl-14 pr-5 text-lg text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-slate-400" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl bg-white/5 border border-white/10 h-14 pl-14 pr-5 text-lg text-white outline-none focus:border-cyan-400"
            />
          </div>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-900 border border-white/10 h-14 text-lg px-4 text-white outline-none focus:border-cyan-400"
          >
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <button
            onClick={handleRegister}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 h-14 text-lg font-bold hover:scale-105 transition"
          >
            Register
          </button>

          <p className="text-center text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;