import BasicBars from "../components/Home/BasicBars";
import React from "react";
import LineGraphe from "../components/Home/LineGraphe";
import BasicPie from "../components/Home/BasicPie";
import StatRec from "@/components/Home/StatRec";
const stat = [
  {
    Name: "New request",
    Number: 41,
  },
  {
    Name: "Completed task",
    Number: 72,
  },
  {
    Name: "In progress",
    Number: 19,
  },
];
const Home = () => {
  return (
    <div className="flex flex-row  flex-wrap w-full bg-slate-50 ">
      {stat.map(({ Name, Number }) => (
        <StatRec Name={Name} Number={Number} />
      ))}
      <BasicBars />
      <LineGraphe />
      <BasicPie />
    </div>
  );
};

export default Home;
