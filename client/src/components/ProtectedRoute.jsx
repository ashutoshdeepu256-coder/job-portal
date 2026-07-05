import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Login nahi hai
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Role match nahi hua
  if (role && user?.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;