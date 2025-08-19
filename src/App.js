import  Signup  from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import { AuthMiddleware } from "./shared/AuthMiddleware";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AuthMiddleware authRequired={true}><Dashboard/></AuthMiddleware>} />
        {/* Add more routes as needed */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
