import React, { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch();
  };

  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
