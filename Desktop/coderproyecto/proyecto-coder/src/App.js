import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Views
import Home from "./Componentes/views/Home.js";
import About from "./Componentes/views/About.js";
import Contact from "./Componentes/views/Contact.js";
import ProductDetail from './Componentes/views/ProductDetail.js';
import Category from "./Componentes/views/Category.js";

import NavBar from "./Componentes/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
          <Route path='/category/:category_id' element={<Category />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;

