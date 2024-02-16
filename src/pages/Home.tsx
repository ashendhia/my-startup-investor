import BasicBars from "../components/Home/BasicBars";
import LineGraphe from "../components/Home/LineGraphe";
import BasicPie from "../components/Home/BasicPie";
import StatRec from "@/components/Home/StatRec";
const stat = [
  {
    Name: "New Requests",
    Number: 4,
  },
  {
    Name: "Completed task",
    Number: 72,
  },
  {
    Name: "In progress",
    Number: 19,
  },
];
const Home = () => {
  return (
    <div className="grid grid-cols-6 w-full gap-6">
      {stat.map((statRec) => (
        <StatRec Name={statRec.Name} Number={statRec.Number} />
      ))}
      <BasicBars />
      <LineGraphe />
      <BasicPie />
    </div>
  );
};

export default Home;
