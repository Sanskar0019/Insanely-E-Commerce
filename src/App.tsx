import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ShopPage from "./ShopPage"; // Ensure ShopPage is correctly imported
import LogoLoader from './components/ui/LogoLoader'; // Add this import
import Footer from "./components/Footer"; // Add this import
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time
  }, []);

  return (
    <>
      {loading ? (
        <LogoLoader />
      ) : (
        <Router>
          <Header />
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
          </Routes> 
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
