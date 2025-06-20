import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./global/components/Nav.jsx" // Menu
import Footer from "./global/components/Footer.jsx" // Footer
import Faqs from "../src/pages/Faqs/Faqs.jsx" 
import Prouducts from "../src/pages/Products/Products.jsx"
import ShoppingCard from "../src/pages/ShopingCart/ShopingCart.jsx"

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/products" element={<Prouducts/>} />
        <Route path="/cart" element={<ShoppingCard/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
