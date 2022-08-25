import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/mainscreen";
import ChatScreen from "./screens/chatscreen";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
          <Route path={"chat"} element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
