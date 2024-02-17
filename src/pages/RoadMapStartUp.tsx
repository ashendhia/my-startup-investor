import Roadmap from "@/components/RoadMapStartUp/Stepper";
import { usePageContext } from "@/context/PageContext";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const RoadMapStartUp = () => {
  const navigate = useNavigate();
  // const table = {
  //   1: "First",
  //   2: "Second",
  //   3: "Third",
  //   // Add more entries as needed
  // };

  // @ts-expect-error
  const { step, setStep } = usePageContext();
  const handlePage = () => {
    // Initialize the navigate function
    navigate(`${step}`);
    setStep(1);

    console.log(step); // Navigate to the "/second" route
  };
  return (
    <div className="flex w-full flex-col">
      <h2 className="text-4xl font-semibold">Welcome Islam</h2>
      <Roadmap Stepnum={step} setStepnum={setStep} />
      <button
        className="px-10 py-4 bg-black text-white w-44 self-center rounded-md duration-100 hover:bg-slate-800"
        onClick={() => handlePage()}
      >
        Start Process
      </button>
    </div>
  );
};

export default RoadMapStartUp;
