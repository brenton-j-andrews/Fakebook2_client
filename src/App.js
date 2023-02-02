// Import order: libraries and modules -> components -> assets.  Missing anything?

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
