import logo from './logo.svg';
import './App.css';
import Navbar from './MainRoute/Navbar';
import MainRoute from './MainRoute/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;
