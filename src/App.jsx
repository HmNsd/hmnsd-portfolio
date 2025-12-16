import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDark } = useTheme();
  
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #000000, #333333, #000000)' 
          : '#ffffff',
        color: isDark ? '#ffffff' : '#000000'
      }}
    >
      <Header />
      <main className="flex-grow container mx-auto mt-5 px-4">
        <Routes>
          <Route path="/hmnsd-portfolio" element={<Home />} />
          <Route path="/hmnsd-portfolio/skills" element={<Home />} />
          <Route path="/hmnsd-portfolio/projects" element={<Home />} />
          <Route path="/hmnsd-portfolio/experience" element={<Home />} />
          <Route path="/hmnsd-portfolio/contact" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
