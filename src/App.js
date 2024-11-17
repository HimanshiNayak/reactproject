// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GlobalStyle from './styles/GlobalStyle';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Menu from './components/Menu';
// import Order from './components/Order';
// import Gallery from './components/Gallery';
// import Reviews from './components/Reviews';
// import Footer from './components/Footer';
// import Reservation from './components/Reservation';

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reservations" element={<Reservation />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/reviews" element={<Reviews />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <div className="contentWrapper">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path ="/AboutUs" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
