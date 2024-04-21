import logo from "./logo.svg";
import "./App.css";
import Add_agent from "./pages/Add_buyer";

import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewdata from "./pages/Viewdata";
function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />
      
    </>
  );
}

export default App;
