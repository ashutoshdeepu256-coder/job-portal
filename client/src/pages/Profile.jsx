import { useEffect, useState } from "react";
import api from "../services/api";
import {
  User,
  Mail,
  Briefcase,
  FileText,
} from "lucide-react";

export default function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      const { data } = await api.get(
        "/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(data.user);

    } catch (err) {
      console.log(err);
    }
  };

  if (!user)
    return (
      <div className="text-white text-center mt-20">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen px-8 py-12 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Banner */}

        <div className="h-56 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>

        {/* Card */}

        <div className="-mt-24 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-6xl font-black">
              {user.name.charAt(0)}
            </div>

            <div className="flex-1">

              <h1 className="text-5xl font-black">
                {user.name}
              </h1>

              <p className="text-slate-400 mt-3 flex items-center gap-2">
                <Mail size={18}/>
                {user.email}
              </p>

              <p className="text-slate-400 mt-3 flex items-center gap-2">
                <Briefcase size={18}/>
                {user.role}
              </p>

              {user.resume ? (

                <a
                  href={`http://localhost:5000/uploads/${user.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
                >
                  <FileText size={18}/>
                  View Resume
                </a>

              ) : (

                <p className="mt-6 text-slate-400">
                  Resume Not Uploaded
                </p>

              )}

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
            <h2 className="text-4xl font-black">
              🎯
            </h2>

            <p className="mt-4 text-slate-400">
              Profile Completed
            </p>

            <h3 className="text-4xl font-bold mt-3">
              90%
            </h3>

          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
            <h2 className="text-4xl">
              💼
            </h2>

            <p className="mt-4 text-slate-400">
              Role
            </p>

            <h3 className="text-3xl font-bold mt-3 capitalize">
              {user.role}
            </h3>

          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-8">
            <h2 className="text-4xl">
              👤
            </h2>

            <p className="mt-4 text-slate-400">
              Account Status
            </p>

            <h3 className="text-3xl font-bold mt-3 text-green-400">
              Active
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}