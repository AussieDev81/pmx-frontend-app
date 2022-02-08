import React, { useEffect, useState} from "react";

const URL = "http://localhost:8080/pmx/v1/crypto/fakes";

const AllCoins = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(URL) 
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } 

  else if (!isLoaded) {
    return <div>Loading...</div>;
  } 

  else {
    return (
      //Todo: Format list appearance
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}): {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default AllCoins;
