import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <h1>My Store</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
