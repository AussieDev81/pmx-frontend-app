import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/BottomNav.css";

const navButtons = [
  { title: "Dash", route: "/" },
  { title: "Coins", route: "/coins" },
  { title: "Account", route: "/account" },
];

const BottomNav = () => {
  return (
    <footer style={styles} className="grid-container">
      {navButtons.map((item, index) => (
        <Link to={item.route} key={index}>
          <button className="grid-item" to={item.route}>
            {item.title}
          </button>
        </Link>
      ))}
    </footer>
  );
};

export default BottomNav;
