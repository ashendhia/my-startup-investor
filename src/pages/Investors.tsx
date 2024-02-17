import RectangleInvestors from "@/components/Investissement/RectangleInvestors";

const Investors = () => {
  return (
    <div className="flex flex-col w-full ">
      <h1 className="text-3xl font-bold">Investors</h1>
      <RectangleInvestors
        First_Name={"ÉLON MASK"}
        Last_Name={"DJAMEL"}
        Description={
          "djamel est un investisor algerien qui vise a augmenter la qualite de ces invesstissement"
        }
      />
    </div>
  );
};

export default Investors;
