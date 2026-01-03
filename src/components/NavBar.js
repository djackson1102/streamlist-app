import React from "react";
import { Link } from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}><MovieIcon /> StreamList</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}><HomeIcon /> Home</Link>
        <Link to="/events" style={styles.link}><MovieIcon /> Events</Link>
        <Link to="/cart" style={styles.link}><ShoppingCartIcon /> Cart</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#111",
    color: "#fff"
  },
  logo: { fontSize: "22px", fontWeight: "bold" },
  links: { display: "flex", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "18px" }
};
