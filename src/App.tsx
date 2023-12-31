import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Space from './components/pages/Space';
import About from './components/pages/About';
import ContactForm from './components/pages/ContactForm';
import './App.css';

const App = () => {
  return (
    <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space" element={<Space />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router> 
    </main>  
    </>
  )

}

export default App;