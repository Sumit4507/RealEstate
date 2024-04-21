import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewdata from "./pages/Viewdata";
import Navbar from "./components/Navbar";
import Add_agent from "./pages/Add_buyer";
import Add_property from "./pages/Add_property";
import Home from "./pages/Home";
import Add_property_details from "./pages/Add_propertydetails";
import Add_transaction from "./pages/Add_transaction";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <App />
        <Routes>
        
        <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/view_buyer"
            element={<Viewdata table={"buyer"} />}
          />
          <Route exact path="/add_property" element={<Add_property />} />
          <Route
            exact
            path="/view_property"
            element={<Viewdata table={"property"} />}
          />
          <Route
            exact
            path="/view_property_details"
            element={<Viewdata table={"property_details"} />}
          />
          <Route
            exact
            path="/view_transaction"
            element={<Viewdata table={"transaction"} />}
          />
          <Route
            exact
            path="/add_property_details"
            element={<Add_property_details />}
          />
          <Route
            exact
            path="/add_transaction"
            element={<Add_transaction/>}
          />

          <Route
            exact
            path="/view_seller"
            element={<Viewdata table={"seller"} />}
          />
          <Route
            exact
            path="/view_agent"
            element={<Viewdata table={"agent"} />}
          />
          <Route
            exact
            path="/add_buyer"
            element={<Add_agent table={"buyer"} />}
          />
          <Route
            exact
            path="/add_seller"
            element={<Add_agent table={"seller"} />}
          />
          <Route
            exact
            path="/add_agent"
            element={<Add_agent table={"agent"} />}
          />
        </Routes>
      </div>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
