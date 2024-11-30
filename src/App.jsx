import React, { useState } from "react"
import Header from "./Components/header/Header.jsx";
import { useRoutes } from "react-router-dom"
import router from "./routes.jsx"
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import "./App.css"
import data from "./Context/Context.jsx";
import ThemModal from "./Components/themModal/ThemModal.jsx";

function App() {
  const route = useRoutes(router)

  const [showThem, setShowThem] = useState(false)
  const [colors, setColors] = useState(["red", "blue", "gray", "green"])
  const [color, setColor] = useState('blue')
  return (
    <div className="App">

      <data.Provider value={{
        setShowThem,
        setColors,
        colors,
        color,
        setColor,

      }}
      >
        <Sidebar />
        <div className="main">
          <Header />
          {route}

        </div>
        {showThem ? <ThemModal /> : null}
      </data.Provider>
    </div>
  );
}

export default App;