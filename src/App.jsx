
import Home from "./Pages/Home"
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import { Routes, Route } from "react-router";

// import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </>
  );
}

export default App;
