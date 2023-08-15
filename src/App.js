import {
  Routes, Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Calculator from './Pages/Calculator';
import Quote from './Pages/Quote';
import Notfound from './Pages/Notfound';
import './style.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </>
);

export default App;
