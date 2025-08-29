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
import Users from "./components/User/Users";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-stone-600 via-black to-stone-600 text-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow container mx-auto mt-5 px-4">
          <Routes>
            <Route path="/hmnsd-portfolio" element={<Home />} />

            <Route path="/hmnsd-portfolio/skills" element={<Skills />} />
            <Route path="/hmnsd-portfolio/projects" element={<Projects />} />
            <Route path="/hmnsd-portfolio/experience" element={<Experience />}/>
            <Route path="/hmnsd-portfolio/contact" element={<Contact />} />
            <Route path="/hmnsd-portfolio/login" element={<Login />} />
            <Route path="/hmnsd-portfolio/services" element={<Services />} />
            <Route path="/hmnsd-portfolio/user/:userId" element={<Users />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
