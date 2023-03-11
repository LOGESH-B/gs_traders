import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/home';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>hii</h1>
      <Home />
    </div>
    </Provider>
  );
}

export default App;
