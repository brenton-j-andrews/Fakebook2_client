// Import order: libraries and modules -> components -> assets.  Missing anything?

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
