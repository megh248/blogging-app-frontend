import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login, token } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
    if (token) {
      navigate("/dashboard"); // already logged in → send to dashboard
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", form);
      const { token, user } = res.data;

      login(user, token); // update AuthContext
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input name="email" label="Email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Input name="password" label="Password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <Button type="submit">Login</Button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      <p>{message}</p>
    </div>
  );
}
