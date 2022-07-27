import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import OrderSummary from '../pages/order_summary/OrderSummary'
import Delivery from '../pages/delivery/Delivery'
import Pickup from '../pages/pickup/Pickup';

//styles
import './App.css'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/pickup' element={<Pickup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
