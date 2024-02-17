import BasicPie from "@/components/Home/BasicPie";
import StatRec from "@/components/Home/StatRec";
import React from "react";

const Investments = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-bold">My investements numbers</h1>
      <div className="flex flex-row w-full my-7">
        <StatRec Name="Investisor" Number={4} />
      </div>
      <div className="w-1/2 self-center my-7">
        <BasicPie />
      </div>
    </div>
  );
};

export default Investments;
