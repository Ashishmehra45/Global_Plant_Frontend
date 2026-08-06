import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Blog from './pages/Blog';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './pages/Contact';
import Certifications from './pages/Certification'; // Import the Certifications component
// import GlobalPresence from './pages/GlobalPresence';

// 1. Create a Layout component for public pages
const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 bg-pattern-light">
      <Navbar />
      <main className="flex-grow">
        {/* The current page content will render inside Outlet */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 2. Admin Route (WITHOUT Navbar and Footer) */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* 3. Public Routes (WITH Navbar and Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/certifications" element={<Certifications />} />
          {/* <Route path="/global-presence" element={<GlobalPresence />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
   
export default App;