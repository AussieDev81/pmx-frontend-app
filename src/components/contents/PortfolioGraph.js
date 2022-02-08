import React, { useEffect, useState } from "react";

const PortfolioGraph = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const GRAPH_URL = props.portfolio.URL;

  useEffect(() => {
    fetch(GRAPH_URL)
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
      );
  }, [GRAPH_URL]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      //Todo: Format list into graph
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}): {item.price}
          </li>
        ))}
      </ul>
    );
  }
};

export default PortfolioGraph;
