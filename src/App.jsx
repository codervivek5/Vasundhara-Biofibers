import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import About from "./pages/About";
// import Technology from "./pages/Technology";
// import Team from "./pages/Team";
// import News from "./pages/News";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        {/* <Route path="footer" element={<Footer />} /> */}
        
      {/* 
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
        <Route path="team" element={<Team />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
