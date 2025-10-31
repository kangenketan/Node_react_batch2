import { useState } from "react";
import "./App.css";
import MainRoutes from "./routes/mainRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
