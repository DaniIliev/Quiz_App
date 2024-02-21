import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Catalog from "./components/pages/Catalog";
import GamePlay from "./components/pages/GamePlay";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/game-play" element={<GamePlay />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
