import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import ShoppingCart from "./components/ShoppingCart";
import { useStateContext } from "./context/StateContext";
import ProductDetails from "./pages/ProductDetails";

sf
function App() {
  const { products } = useStateContext();
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          {products &&
            products.map((product, index) => (
              <Route
                key={index}
                path={`/store/${product.slug.current}`}
                element={<ProductDetails {...product} />}
              />
            ))}
        </Routes>
      </main>
      <Footer />
      <ShoppingCart />
    </>
  );
}

export default App;
