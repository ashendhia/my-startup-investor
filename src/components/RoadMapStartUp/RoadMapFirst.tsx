import { usePageContext } from "@/context/PageContext";
import { useNavigate } from "react-router-dom";

const RoadMapFirst = () => {
  const navigate = useNavigate();
  // @ts-expect-error
  const { step, setStep } = usePageContext();

  // @ts-expect-error
  const handleNavigation = (routePath) => {
    navigate(`/startup/roadmap/${routePath}`);
    setStep(routePath);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between">
        <button
          className=" px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation("")}
        >
          Previous this
        </button>
        <button
          className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation(2)}
        >
          Next{" "}
        </button>
      </div>
      <div className="w-full p-16">
        <h1 className="text-3xl font-bold my-6">
          Select master blaster campaign settings
        </h1>
        <p className="text-lg my-7">
          This step involves defining the core elements of your marketing
          campaign. It includes determining your target audience, setting
          campaign objectives, selecting appropriate channels (such as social
          media, email marketing, content marketing, etc.), and establishing key
          performance indicators (KPIs) to measure the success of your campaign.
          It's about laying the groundwork for your marketing efforts to ensure
          they align with your overall business goals.
        </p>
      </div>
    </div>
  );
};

export default RoadMapFirst;
