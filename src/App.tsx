import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/mainscreen";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} >

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
