import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            {
                email,
                password,
            }
        );

        login();

        localStorage.setItem(
            "currentUser",
            JSON.stringify(response.data.user)
        );

        alert(response.data.message);

        navigate("/menu");

    } catch (error) {

        alert("Invalid Email or Password");

    }

};

  return (
    <div className="login-page">

      <form className="login-form" onSubmit={handleLogin}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>

            Don't have an account?

            <Link
                to="/register"
                className="signup-link"
            >
                Sign Up
            </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;