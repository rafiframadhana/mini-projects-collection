import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    
    <div className="app-container"> {/* Add this wrapper */}
      <Navbar />
      <main className="main-content"> {/* Wrap main content */}
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;