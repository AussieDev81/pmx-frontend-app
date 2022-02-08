import React, { useEffect } from "react";
import AppConfig from "../../config/AppConfig";
import AllCoins from "../contents/AllCoins";

const pageName = "Coins";


const Coins = () => {

    document.title = pageName + " - " + AppConfig.APP_NAME;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <div className="centered">Coins</div>
      <AllCoins/>
    </div>
  );
};

export default Coins;
