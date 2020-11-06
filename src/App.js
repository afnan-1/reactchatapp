import logo from './logo.svg';
import './App.css';
import Home from './containers/home';
import Routes from './config/Routes'
import { useHistory } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes />
    </div>
  );
}

export default App;
