import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Mathmagician</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
