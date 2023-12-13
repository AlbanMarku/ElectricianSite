import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Contact from './views/Contact';
import Form from './views/Form';
import Gallery from './views/Gallery';
import Home from './views/Home';
import Services from './views/Services';
import Testimonials from './views/Testimonials';

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
