import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/home/Home';
import { store } from './redux/store';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Traders from './pages/products/traders/trader';
import Bluemetal from './pages/products/bluemetal';
import Bricks from './pages/products/bricks';
import Construction from './pages/products/construction';
import Booking from './components/booking/booking';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="booking" element={<Booking/>} />
          <Route path="trade" element={<Traders/>} />
            <Route path="bluemetal" element={<Bluemetal/>} />
            <Route path="bricks" element={<Bricks/>} />
            <Route path="construction" element={<Construction/>} />
        
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
