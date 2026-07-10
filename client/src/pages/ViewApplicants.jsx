import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

export default function ViewApplicants() {

  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {

    const token = localStorage.getItem("token");

    const { data } = await api.get(
      `/applications/job/${jobId}`,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );

    setApplications(data.applications);

  };

  const updateStatus = async(id,status)=>{

    const token=localStorage.getItem("token");

    const {data}=await api.put(
      `/applications/status/${id}`,
      {status},
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );

    toast.success(data.message);

    fetchApplicants();

  }

  return(

<div className="min-h-screen p-10 text-white">

<h1 className="text-5xl font-black mb-10">
Applicants
</h1>

<div className="space-y-6">

{applications.map(app=>(

<div
key={app._id}
className="rounded-3xl bg-white/10 border border-white/10 p-8"
>

<h2 className="text-2xl font-bold">
{app.student.name}
</h2>

<p>{app.student.email}</p>
{app.student?.resume ? (
  <a
    href={`http://localhost:5000/uploads/${app.student.resume}`}
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-4 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
  >
    View Resume
  </a>
) : (
  <p className="text-slate-400 mt-4">
    Resume Not Uploaded
  </p>
)}

<p className="mt-3">
Status :
<strong> {app.status}</strong>
</p>

<div className="flex gap-4 mt-6">

<button
onClick={()=>updateStatus(app._id,"Selected")}
className="bg-green-500 px-6 py-3 rounded-xl"
>
Accept
</button>

<button
onClick={()=>updateStatus(app._id,"Rejected")}
className="bg-red-500 px-6 py-3 rounded-xl"
>
Reject
</button>

</div>

</div>

))}

</div>

</div>

)

}