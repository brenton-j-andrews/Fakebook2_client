// Import order: libraries and modules -> components -> assets.  Missing anything?

import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import "./app.css";

function App() {

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route 
            exact path="/"
            element={ user ? <Home /> : <Login />}
          />

          <Route 
            exact path="/profile/:username"
            element={ <Profile /> }
          />


          <Route 
            exact path="/login"
            element={ user ? <Navigate to="/" /> : <Login /> }
          />


          <Route 
            exact path="/register"
            element={ <Register /> }
          />

          <Route 
            path="/test"
            element = { <div> hello from the other side! </div>}
          />

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
