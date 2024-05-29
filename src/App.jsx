import { useSelector } from "react-redux";
import Authentication from "./Authentication/Authentication.jsx";
import HomePage from "./HomePage";
import "./index.css";

function App() {
  const user = useSelector((state) => state.data.user.user);
  // console.log(user);
  return <div className="app">{user ? <HomePage /> : <Authentication />}</div>;
}

export default App;
