import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Confirmation from './components/Confirmation';
import PaymentEntry from './components/PaymentEntry';
import Purchase from './components/Purchase';
import ShippingEntry from './components/ShippingEntry';
import ViewOrder from './components/ViewOrder';

import SampleFooter from "./components/footer";
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <div className="content">
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />

      <Route path='/purchase' element={<Purchase/>} />
      <Route path="/" element={<Navigate replace to="/purchase" />} />
      <Route path='/purchase/paymentEntry' element={<PaymentEntry/>} />
      <Route path='/purchase/shippingEntry' element={<ShippingEntry/>} />
      <Route path='/purchase/viewOrder' element={<ViewOrder/>} />
      <Route path='/purchase/Confirmation' element={<Confirmation/>} />
      </Routes>
      </div>
      <SampleFooter />
    </Router>
    </div>
  );
}

export default App;
