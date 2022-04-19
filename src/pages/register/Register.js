import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {  
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && history.push("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
      {error && <span style={{color:"red", fontSize:"22px", fontWeight:"bold", textAlign:"center"}}>Something went wrong....!</span>}
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Name....."
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email....."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password....."
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="btn" to="/login">
          Login
        </Link>
      </button>
      
    </div>
  );
}

export default Register;
