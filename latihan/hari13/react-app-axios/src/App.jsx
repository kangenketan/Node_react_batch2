import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home";
import CRUDaxios from "./pages/CRUDaxios";
import "./CRUDaxios.css";
import MainRoutes from "./routes/mainRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainRoutes></MainRoutes>
      {/* <CRUDaxios></CRUDaxios> */}
    </>
  );
}

export default App;
