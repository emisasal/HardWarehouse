import { Routes, Route } from "react-router"

import Product from "./components/Product"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Registro from "./components/Registro"
import Home from "./components/Home"
import AllProducts from "./components/AllProducts";
import  ShoppingCart  from "./components/ShoppingCart"
import Admin from "./components/Admin"
import Checkout from "./components/Checkout"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import History from "./components/History"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<AllProducts/>} />
        <Route path="/productos/:category" element={<AllProducts/>} />
        <Route path="/perifericos" element={"Perifericos"} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="/carrito/checkout" element={<Checkout />} />
        <Route path="/admin/administrador" element={<Admin />} />
        <Route path="/admin/administrador/edit" element={<Admin />} />
        <Route path="/search" element={<AllProducts/>} />
        <Route path='/miHistorial' element={<History />} />
        <Route path='/*' element={<NotFound />}/>

      </Routes>
      <Footer />

    </div>
  )
}

export default App
