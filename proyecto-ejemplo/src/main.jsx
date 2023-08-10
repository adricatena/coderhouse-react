import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./routes/Cart.jsx";
// import Item from "./routes/Item.jsx";
// import Products from "./routes/Products.jsx";
// import Product from "./routes/Product.jsx";
// import Categoria from "./routes/Categoria.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:productId" element={<Product />} />
        <Route path="/categorias/:categoriaId" element={<Categoria />} />
        <Route exact path="/carrito" element={<Cart />} />
        <Route exact path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter> */}

    <App />
  </React.StrictMode>
);
