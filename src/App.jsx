import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Skills from "./components/Pages/Skills";
import Projects from "./components/Pages/Projects";
import Experience from "./components/Pages/Experience";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/Login";
import Services from "./components/Pages/Services";

function App() {

  return (
    <>
    
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-stone-600 via-black to-stone-600 text-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow container mx-auto mt-5 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
                   
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    
    </>
  )
}

export default App
