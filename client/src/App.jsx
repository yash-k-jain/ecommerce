import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { Toaster } from "react-hot-toast";
import Address from "./components/auth/Address";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/:type" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
