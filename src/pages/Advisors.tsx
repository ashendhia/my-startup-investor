import React from "react";
import {
  CircleDollarSign,
  PersonStanding,
  AudioLines,
  Laptop2,
  FlagTriangleRight,
  Router,
} from "lucide-react";

const Advisors = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-semibold text-blue-800">
        What kind of advice are you looking for ?
      </h1>
      <div className="grid grid-cols-3 items-center gap-x-20  w-full ">
        <div className=" w-3/5 bg-white flex flex-col m-10  cursor-pointer rounded-md shadow-md p-6">
          <CircleDollarSign className="w-full h-full" />
          <h1 className="text-2xl stroke-black self-center">Accounting</h1>
        </div>
        <div className=" w-3/5 bg-white flex flex-col m-10 cursor-pointer rounded-md shadow-md p-6">
          <PersonStanding className="w-full h-full" />
          <h1 className="text-2xl stroke-black self-center">RH</h1>
        </div>
        <div className=" w-3/5 bg-white flex flex-col m-10 cursor-pointer rounded-md shadow-md p-6">
          <AudioLines className="w-full h-full" />
          <h1 className="text-2xl stroke-black self-center">Communication</h1>
        </div>
        <div className=" w-3/5 bg-white flex flex-col m-10  cursor-pointer rounded-md shadow-md p-6">
          <Laptop2 className="w-full h-full" />
          <h1 className="text-2xl stroke-black self-center">IT&Technical </h1>
        </div>
        <div className=" w-3/5 bg-white flex flex-col m-10 cursor-pointer  rounded-md shadow-md p-6">
          <FlagTriangleRight className="w-full h-full" />
          <h1 className="text-2xl stroke-black self-center">Marketing</h1>
        </div>
        <div className=" w-3/5 bg-white flex flex-col m-10 cursor-pointer rounded-md shadow-md p-6 ">
          <Router className="w-full h-full" />
          <h1 className="text-2xl stroke-black self-center">Support</h1>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
