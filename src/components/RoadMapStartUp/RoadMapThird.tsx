import { usePageContext } from "@/context/PageContext";
import { useNavigate } from "react-router-dom";

const RoadMapThird = () => {
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
          className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation(2)}
        >
          Previous this
        </button>
        <button
          className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation(4)}
        >
          Next{" "}
        </button>
      </div>
      <div className="w-full p-16">
        <h1 className="text-3xl font-bold my-6">
          Navigate the judicial landscape:
        </h1>
        <p className="text-lg my-7">
          This step involves understanding and complying with legal and
          regulatory requirements relevant to your business. It includes
          registering your company, obtaining necessary licenses and permits,
          understanding tax obligations, and ensuring compliance with employment
          laws and regulations. Navigating the legal landscape helps mitigate
          risks, protect your business, and ensure smooth operations without
          encountering legal issues
        </p>
      </div>
    </div>
  );
};

export default RoadMapThird;
