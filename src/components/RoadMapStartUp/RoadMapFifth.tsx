import { usePageContext } from "@/context/PageContext";
import { useNavigate } from "react-router-dom";

const RoadMapFifth = () => {
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
          onClick={() => handleNavigation(4)}
        >
          Previous this
        </button>
      </div>
      <div className="w-full p-16">
        <h1 className="text-3xl font-bold my-6">Keep your finance in order</h1>
        <p className="text-lg my-7">
          Managing finances effectively is critical for the long-term success
          and sustainability of your startup. This step involves establishing
          financial systems and processes, such as budgeting, accounting, cash
          flow management, and financial reporting. It's essential to track
          income and expenses, monitor financial performance, and make informed
          decisions to optimize resource allocation and maximize profitability.
          Additionally, startups should plan for contingencies, such as economic
          downturns or unexpected expenses, and maintain a financial cushion to
          weather uncertainties and sustain operations..
        </p>
      </div>
    </div>
  );
};

export default RoadMapFifth;
