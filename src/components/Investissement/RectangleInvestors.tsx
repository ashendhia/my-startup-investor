import React from "react";

const RectangleInvestors = ({ First_Name, Last_Name, Description }) => {
  return (
    <div className="w-full px-10 py-8 bg-gray-100 rounded-md  flex flex-row cursor-pointer my-5">
      <div className="flex flex-col">
        <h1 className="text-2xl  font-semibold">{First_Name}</h1>
        <h1 className="text-2xl font-semibold">{Last_Name}</h1>
      </div>
      <div className="ml-16">
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default RectangleInvestors;
