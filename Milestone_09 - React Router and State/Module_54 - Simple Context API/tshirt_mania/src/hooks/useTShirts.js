import { useState } from "react";
import { useEffect } from "react";

const useTshirt = () => {
  const [tShirts, setTShirt] = useState([]);
  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTShirt(data));
  }, []);

  return [tShirts, setTShirt];
};

export default useTshirt;
