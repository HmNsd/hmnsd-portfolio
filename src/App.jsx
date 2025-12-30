import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { isDark } = useTheme();
  const [searchText, setSearchText] = useState("");
  const [matchCount, setMatchCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
  setSearchText("");
}, [location.pathname]);


  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #000000, #333333, #000000)' 
          : 'linear-gradient(135deg, #ffffff, #f8f9fa, #ffffff)',
        color: isDark ? '#ffffff' : '#000000'
      }}
    >
      <Header onSearch={setSearchText} matchCount={matchCount} />
      <main className="flex-grow container mx-auto mt-5 px-4">
        <Routes>
          <Route path="/hmnsd-portfolio" element={<Home searchText={searchText}  setMatchCount={setMatchCount}/>} />
          <Route path="/hmnsd-portfolio/skills" element={<Home searchText={searchText}  setMatchCount={setMatchCount}/>} />
          <Route path="/hmnsd-portfolio/projects" element={<Home searchText={searchText}  setMatchCount={setMatchCount}/>} />
          <Route path="/hmnsd-portfolio/experience" element={<Home searchText={searchText}  setMatchCount={setMatchCount}/>} />
          <Route path="/hmnsd-portfolio/contact" element={<Home searchText={searchText}/>} />
        </Routes>
      </main>
      <Footer searchText={searchText} />
    </div>
  );
}

export default App;
