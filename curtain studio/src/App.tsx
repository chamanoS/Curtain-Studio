import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/about" element={<About />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  );
}
