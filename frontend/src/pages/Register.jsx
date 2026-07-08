import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

        await axios.post(
            "http://localhost:5000/api/auth/register",
            {
                name,
                email,
                password,
            }
        );

        alert("Registration Successful!");

        navigate("/login");

    } catch (error) {

        alert("Registration Failed!");

        console.log(error);

      }

  };

  return (
    <div className="register-page">

      <form className="register-form" onSubmit={handleRegister}>

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Register;