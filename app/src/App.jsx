import { Routes, Route } from "react-router-dom";
import Catalog from "./components/pages/Catalog";
import GamePlay from "./components/pages/GamePlay";
import { AuthProvider } from "./context/authContext";
import Login from "./components/pages/Login";
import NavBar from "./components/shared/NavBar";
import Register from "./components/pages/Register";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route element={<GuestGuard /> }>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register/>}/>
            </Route>

            <Route element={<AuthGuard/>}>
                <Route path="/catalog"  element={<Catalog />} />
                <Route path="/game-play" element={<GamePlay />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
