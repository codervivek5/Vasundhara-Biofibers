import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactUs />} />
       
      </Route>
    </Routes>
  );
}

export default App;
