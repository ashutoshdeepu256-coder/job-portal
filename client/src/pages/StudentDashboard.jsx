import { useEffect, useState } from "react";
import api from "../services/api";

function StudentDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/applications/my-applications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApplications(data.applications);
    } catch (error) {
      console.log(error);
    }
  };

 return (
  <div className="min-h-screen px-8 py-10 text-white">

    <div className="max-w-7xl mx-auto">

      <div className="mb-10">
        <h1 className="text-5xl font-black">
          Student Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Track all your job applications.
        </p>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-slate-400">
            Total Applications
          </p>

          <h2 className="text-5xl font-black mt-3">
            {applications.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-slate-400">
            Pending
          </p>

          <h2 className="text-5xl font-black mt-3 text-yellow-400">
            {
              applications.filter(
                (app) => app.status === "Pending"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-slate-400">
            Selected
          </p>

          <h2 className="text-5xl font-black mt-3 text-green-400">
            {
              applications.filter(
                (app) => app.status === "Selected"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Applications */}

      <div className="grid lg:grid-cols-2 gap-8">

        {applications.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-white/20 p-12 text-center text-slate-400">
            No Applications Yet
          </div>

        ) : (

          applications.map((app) => (

            <div
              key={app._id}
              className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <h2 className="text-3xl font-bold">
                {app.job.title}
              </h2>

              <p className="text-slate-400 mt-2">
                {app.job.company}
              </p>

              <div className="mt-8 space-y-3">

                <p>
                  📍 {app.job.location}
                </p>

                <p>
                  💰 {app.job.salary}
                </p>

                <p>
                  📌 Status:
                  <span
                    className={`ml-2 font-semibold ${
                      app.status === "Selected"
                        ? "text-green-400"
                        : app.status === "Rejected"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {app.status}
                  </span>
                </p>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  </div>
);
}
export default StudentDashboard;