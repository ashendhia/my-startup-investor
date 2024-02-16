import React from "react";

const StatRec = ({ Name, Number }) => {
  return (
    <div className="flex flex-row w-[20rm] px-20 py-5 bg-white rounded-lg h-32 shadow-lg items-center mr-6 duration-100 cursor-pointer hover:bg-slate-400">
      <h1 className="text-4xl text-black mr-6">{Number}</h1>
      <h1 className="text-2xl font-semibold">{Name} </h1>
    </div>
  );
};

export default StatRec;
