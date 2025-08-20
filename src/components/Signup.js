import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Input from "./shared/Input";
import Button from "./shared/Button";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/user/signup", form);
      setMessage(res.data.message || "Signup successful");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Name" placeholder="Name" value={form.name} onChange={handleChange} />
        <Input name="email" label="Email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Input name="password" label="Password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <Button type="submit">Signup</Button>
      </form>
      <br/>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      <p>{message}</p>
    </div>
  );
}
