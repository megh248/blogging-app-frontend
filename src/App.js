import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "../src/components/shared/PrivateRoute";
import PublicRoute from "./components/shared/PublicRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login/></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
