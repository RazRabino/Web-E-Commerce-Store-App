import Home from "./pages/Home";
import ProductsList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductsList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
};
export default App;

// TODO: put some real data in store and in its all components