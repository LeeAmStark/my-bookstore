import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/shared/Cart";
import Order from "./components/Order";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
