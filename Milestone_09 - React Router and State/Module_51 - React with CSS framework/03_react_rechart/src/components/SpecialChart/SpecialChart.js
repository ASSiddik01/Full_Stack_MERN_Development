import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Bar, BarChart, Tooltip } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
      });
  }, []);

  console.log(phones);

  return (
    <BarChart width={1200} height={400} data={phones}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default SpecialChart;
