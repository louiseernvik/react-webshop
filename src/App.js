import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import Product from './pages/Product';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
