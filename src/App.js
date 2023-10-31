import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Mission from './Mission';
import Contact from './Contact';
import Gallery from './Gallery';


function App() {
  return (
    <div className="container">
      <div className="row">

        <Header />
        <Navbar />
        <Home />

      </div>
    <div className ="row">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/mission" element={<Mission />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>

    </div>
    </div>
  );
}

export default App;
