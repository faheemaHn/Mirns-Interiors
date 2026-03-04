import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ServiceDetails from "./pages/ServiceDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProjectDetails from "./pages/ProjectDetails";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
  <MainLayout>
    {/* Fixed WhatsApp Button always visible */}
    <WhatsAppButton />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  </MainLayout>
</BrowserRouter>
  );
}



export default App;
