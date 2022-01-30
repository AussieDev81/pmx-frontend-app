import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import styles from "../assets/css/App.css";
import TopNav from "./navigation/TopNav";
import BottomNav from "./navigation/BottomNav";
import Dashboard from "./pages/Dashboard";
import Coins from "./pages/Coins";
import Account from "./pages/Account";

const AppRouter = () => {
  return (
    <Router>
      <TopNav />
      <div style={styles} className="page-content">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/coins" element={<Coins />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
};

export default AppRouter;
