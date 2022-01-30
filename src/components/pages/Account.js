import React, { useEffect } from "react";
import AppConfig from "../../config/AppConfig";

const pageName = "Account"


const Account = () => {

    document.title = pageName + " - " + AppConfig.APP_NAME;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return <div className="centered">Account</div>;
};

export default Account;

