// Import Outlet
import { Outlet } from "react-router-dom";

// Import components
import Navbar from "./components/Navabr/Navbar";

// Import css
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
