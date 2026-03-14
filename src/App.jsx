import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

import Home from "./pages/Home"
import Trainer from "./pages/Destinations"
import Program from "./pages/Packages"
import Blogs from "./pages/Reviews"
import Pricing from "./pages/Contact"
import Footer from "./components/Footer/Footer"
import Destinations from "./pages/Destinations"
import Packages from "./pages/Packages"
import Reviews from "./pages/Reviews"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App