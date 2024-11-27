import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import LocomotiveScroll from "locomotive-scroll"

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
