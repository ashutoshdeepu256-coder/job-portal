import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>💼 Job Portal</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/jobs"
          style={{ color: "white", textDecoration: "none" }}
        >
          Jobs
        </Link>

        {!user && (
          <>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>
          </>
        )}

        {user?.role === "student" && (
          <Link
            to="/student-dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Student Dashboard
          </Link>
        )}

        {user?.role === "recruiter" && (
          <>
            <Link
              to="/create-job"
              style={{ color: "white", textDecoration: "none" }}
            >
              Create Job
            </Link>

            <Link
              to="/recruiter-dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Recruiter Dashboard
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={handleLogout}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;