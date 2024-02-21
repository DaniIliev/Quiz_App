import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Catalog from './components/pages/Catalog'
import GamePlay from './components/pages/GamePlay'
function App() {

  return (
    <>
    <div className="app">
      <Routes>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/game-play" element={<GamePlay/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
