import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/home/home';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Home />
      </div>
    </Provider>
  );
}

export default App;
