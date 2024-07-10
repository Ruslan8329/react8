import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScreenTypeDisplay from "./components/ScreenTypeDisplay";

const App: React.FC = () => {
  return (
    <div className="App">
      <ScreenTypeDisplay />
    </div>
  );
};

export default App;
