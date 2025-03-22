import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/team/Team";
// import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="team" element={<Team />} />
        {/* <Route path="news" element={<News />} /> */}
       
      </Route>
    </Routes>
  );
}

export default App;
