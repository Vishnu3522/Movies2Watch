import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css'


import Main from "./components/Main";
import { Nav } from "react-bootstrap";
const Navigation = {
  color:"balck"
}

function App() {
  return (
    <>
     <Router>
      <div style={Navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        {/* <hr /> */}
      <Routes>
          <Route path="/login" element={<Login />} />
          {/* 👇️ handle dynamic path */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;