import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios"; // Making use of axios to connect the front end to the back end to make requests -
// Make sure this is installed on all your components you intend to link to the back-end
import React from "react";
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

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
