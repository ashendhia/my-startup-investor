import { usePageContext } from "@/context/PageContext";
import { useNavigate } from "react-router-dom";

const RoadMapSecond = () => {
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
          onClick={() => handleNavigation(1)}
        >
          Previous this
        </button>
        <button
          className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
          onClick={() => handleNavigation(3)}
        >
          Next{" "}
        </button>
      </div>
      <div className="w-full p-16">
        <h1 className="text-3xl font-bold my-6">Secure funding </h1>
        <p className="text-lg my-7">
          Securing funding is crucial for any startup to finance its operations,
          product development, marketing efforts, and other expenses. This step
          involves identifying potential sources of funding, such as venture
          capital, angel investors, loans, grants, or bootstrapping.
          Entrepreneurs need to create a compelling business plan, pitch their
          ideas to investors, negotiate terms, and secure the necessary funding
          to support their startup's growth and sustainability.
        </p>
      </div>
    </div>
  );
};

export default RoadMapSecond;
