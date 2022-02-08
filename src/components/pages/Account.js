import React, { useEffect, useState } from "react";
import AccountDetails from "../contents/AccountDetails";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AccountDetails />
    </div>
  );
};

export default Account;
