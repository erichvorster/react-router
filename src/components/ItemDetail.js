import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match)
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    console.log(items);
    setItem(items);
  };

  return <div>
      <div>{}</div>
  </div>;
}

export default ItemDetail;
