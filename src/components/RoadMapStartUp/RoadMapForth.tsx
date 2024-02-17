import { usePageContext } from "@/context/PageContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const RoadMapForth = () => {
  const navigate = useNavigate();
  const { step, setStep } = usePageContext();

  const handleNavigation = (routePath) => {
    navigate(`/startup/roadmap/${routePath}`);
    setStep(routePath);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between">
        <button
          className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation(3)}>
          Previous this
        </button>
        <button
          className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation(5)}>
          Next{" "}
        </button>
      </div>
      <div className="w-full p-16">
        <h1 className="text-3xl font-bold my-6">Create Marketing strategy:</h1>
        <p className="text-lg my-7">
          Developing a comprehensive marketing strategy is essential for
          attracting customers, generating leads, and building brand awareness.
          This step involves conducting market research to understand your
          target audience, identifying competitive advantages, defining your
          unique value proposition, and crafting messaging and positioning
          strategies. It also includes determining the appropriate marketing
          mix, including digital marketing, traditional advertising, public
          relations, and promotional activities, to effectively reach and engage
          your target audience.
        </p>
      </div>
    </div>
  );
};

export default RoadMapForth;
