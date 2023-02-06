// Import order: libraries and modules -> components -> assets.  Missing anything?
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import "./app.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route 
            exact path="/"
            element={ <Home /> }
          />

          <Route 
            exact path="/profile"
            element={ <Profile /> }
          />


          <Route 
            exact path="/login"
            element={ <Login /> }
          />


          <Route 
            exact path="/register"
            element={ <Register /> }
          />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
