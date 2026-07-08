import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Successful");

      if (data.user.role === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/recruiter-dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-12 md:p-14 shadow-2xl">

        <h1 className="text-5xl font-black text-center text-white">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Login to continue
        </p>

        <div className="mt-10">

          <div className="relative mb-6">

            <Mail className="absolute left-4 top-4 text-slate-400"/>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 h-14 pl-14 pr-5 text-lg outline-none text-white focus:border-cyan-400"
            />

          </div>

          <div className="relative">

            <Lock className="absolute left-4 top-4 text-slate-400"/>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 h-14 pl-14 pr-5 text-lg outline-none text-white focus:border-cyan-400"
            />

          </div>

          <button
            onClick={handleLogin}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 h-14 text-lg font-bold hover:scale-105 transition"
          >
            Login
          </button>

          <p className="text-center text-slate-400 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;