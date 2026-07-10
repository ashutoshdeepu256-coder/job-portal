import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function StudentDashboard() {
  const [applications, setApplications] = useState([]);
  const [resume, setResume] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
  fetchApplications();
  fetchSavedJobs();
}, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/applications/my-applications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApplications(data.applications || []);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSavedJobs = async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await api.get(
      "/users/saved-jobs",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setSavedJobs(data.jobs);

  } catch (err) {
    console.log(err);
  }
};

  const uploadResume = async () => {
    if (!resume) {
      return toast.error("Select Resume First");
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("resume", resume);

      const { data } = await api.put(
        "/users/upload-resume",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(data.message);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Upload Failed"
      );
    }
  };

  return (
    <div className="min-h-screen px-8 py-10 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-10">
          <h1 className="text-5xl font-black">
            Student Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Track all your job applications.
          </p>
        </div>

        {/* Resume */}

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 mb-10">

          <h2 className="text-2xl font-bold mb-5">
            Upload Resume
          </h2>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="mb-5 block"
          />

          <button
            onClick={uploadResume}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition"
          >
            Upload Resume
          </button>

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
        <div className="mt-10 mb-10">

<h2 className="text-3xl font-bold mb-6">
❤️ Saved Jobs
</h2>

{savedJobs.length===0 ?(

<p className="text-slate-400">
No Saved Jobs
</p>

):(

<div className="grid lg:grid-cols-2 gap-6">

{savedJobs.map(job=>(

<div
key={job._id}
className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6"
>

<h2 className="text-2xl font-bold">
{job.title}
</h2>

<p className="text-slate-400 mt-2">
{job.company}
</p>

<p className="mt-4">
📍 {job.location}
</p>

<p>
💰 {job.salary}
</p>

</div>

))}

</div>

)}

</div>

        {/* Applications */}

        <div className="grid lg:grid-cols-2 gap-8">

          {applications.filter((app) => app.job).length === 0 ? (

            <div className="rounded-3xl border border-dashed border-white/20 p-12 text-center text-slate-400">
              No Applications Yet
            </div>

          ) : (

            applications
              .filter((app) => app.job)
              .map((app) => (

                <div
                  key={app._id}
                  className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                >

                  <h2 className="text-3xl font-bold">
                    {app.job?.title || "Job Deleted"}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {app.job?.company || "-"}
                  </p>

                  <div className="mt-8 space-y-3">

                    <p>
                      📍 {app.job?.location || "-"}
                    </p>

                    <p>
                      💰 {app.job?.salary || "-"}
                    </p>

                    <p>
                      📌 Status :
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