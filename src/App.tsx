import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Sample from './pages/Sample';
import Blog from './pages/Blog';

// Templates
import ServiceTemplate from './templates/ServiceTemplate';
import TradeTemplate from './templates/TradeTemplate';
import LocationTemplate from './templates/LocationTemplate';
import BlogTemplate from './templates/BlogTemplate';

// ScrollToTop component to fix scroll position on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Services & Trades */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceTemplate />} />
        <Route path="/trades/:id" element={<TradeTemplate />} />

        {/* Locations */}
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:id" element={<LocationTemplate />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogTemplate />} />
      </Routes>
    </Layout>
  )
}

export default App
