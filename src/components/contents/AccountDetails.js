import React, { useEffect, useState } from "react";

const URL = "http://localhost:8080/pmx/v1/account?id=1";

const AccountDetails = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cryptoAccount, setCryptoAccount] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCryptoAccount(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {


    let listItems = [];
    for(var key in cryptoAccount.balances){
      listItems.push(<li key={key}>{key} - {cryptoAccount.balances[key]}</li>);
    }

    return (
      <div>
        <h3>Account: {cryptoAccount.id}</h3>
        <h5>Address: {cryptoAccount.transactionAddress}</h5>
        <ul> {listItems}</ul>
        <p>Active: {cryptoAccount.active? "Yes": "No"} <br/>Default Value: {cryptoAccount.defaultValue}</p>
      </div>
    );
  }
};

export default AccountDetails;
