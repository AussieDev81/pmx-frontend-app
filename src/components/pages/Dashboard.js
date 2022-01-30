import React, { useEffect } from "react";
import AppConfig from "../../config/AppConfig";
import PortfolioGraph from "../api/PortfolioGraph";
import PortfolioBalance from "../api/PortfolioBalance"
import AvailableNVDBalance from "../api/AvailableNVDBalance";

const pageName = "Dashboard";
const GRAPH_URL = "http://localhost:8080/pmx/v1/crypto/fakes";

//Note: demo portfolio instance
const Portfolio = {
  URL: GRAPH_URL,
  portfolioBalance: 35.99,
  availableFunds: 12.99
}

const Dashboard = () => {
    document.title = pageName + " - " + AppConfig.APP_NAME;
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <div className="centered">Dashboard</div>
      <PortfolioBalance portfolioBalance={Portfolio.portfolioBalance} />
      <AvailableNVDBalance availableFunds={Portfolio.availableFunds} />
      <PortfolioGraph portfolio={Portfolio} />
    </div>
  );
};

export default Dashboard;
