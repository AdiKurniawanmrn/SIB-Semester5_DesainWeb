import { Link } from "react-router-dom"; 
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><h5>Developer Team</h5></div>
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Our Team</Link></li> 
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
