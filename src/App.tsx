import {BrowserRouter, Routes, Route, useRoutes, useLocation} from "react-router-dom";
import MainScreen from "./screens/mainscreen";
import ChatScreen from "./screens/chatscreen";
import {useEffect} from "react";

export default function App() {



    useEffect(()=>{

        console.log("DASDsads",location.pathname)

    },[location.pathname])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
          <Route path={"chat"} element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
