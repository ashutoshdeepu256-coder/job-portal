
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Background from "./components/common/Background";
import MouseGlow from "./components/common/MouseGlow";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CreateJob from "./pages/CreateJob";


function App() {
  return (
  
    <>
      <MouseGlow />
      <Background/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/student-dashboard" element={<ProtectedRoute role="student">
        <StudentDashboard />
        </ProtectedRoute>
        }
        />

        <Route
          path="/recruiter-dashboard"
          element={<ProtectedRoute role="recruiter"> <RecruiterDashboard /></ProtectedRoute>}/>

        <Route
          path="/create-job"
          element={<ProtectedRoute role="recruiter"> <CreateJob /></ProtectedRoute>}/>
      </Routes>
    </>
  );
}

export default App;