import { Routes, Route } from "react-router-dom";
import Catalog from "./components/pages/Catalog";
import GamePlay from "./components/pages/GamePlay";
import { AuthProvider } from "./context/authContext";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
function App() {
  return (
    <>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/catalog"  element={<Catalog />} />
            <Route path="/game-play" element={<GamePlay />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
