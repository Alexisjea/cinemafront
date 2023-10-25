import logo from './logo.svg';
import './App.css';
import NavBar from './components/layout/Navbar';
import MainRoutes from './components/routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <MainRoutes />
      <Footer/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
