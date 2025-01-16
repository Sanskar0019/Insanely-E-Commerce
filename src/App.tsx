import { useState, useEffect } from 'react';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LogoLoader from './components/ui/LogoLoader'; // Add this import
import Footer from "./components/Footer"; // Add this import

export default function App() {
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
        <>
          <Header />
          <LandingPage />
          <Footer />
        </>
      )}
    </>
  );
}