import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/home/Home';
import { store } from './redux/store';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Traders from './pages/products/traders/Trader';
import Bluemetal from './pages/products/BlueMetal';
import Bricks from './pages/products/Bricks';
import Construction from './pages/products/Construction';
import Booking from './components/booking/Booking';
import Login from './pages/login/Login'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="trade" element={<Traders />} />
          <Route path="bluemetal" element={<Bluemetal />} />
          <Route path="bricks" element={<Bricks />} />
          <Route path="construction" element={<Construction />} />
          <Route path="admin/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
