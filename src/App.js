import  Signup  from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogging App - Auth</h1>
      <Signup />
      <hr />
      <Login />
    </div>
  );
}

export default App;
