const StatRec = ({ Name, Number }: { Name: string; Number: number }) => {
  return (
    <div className="col-span-2 px-20 py-5 bg-white rounded-lg h-32 shadow-lg items-center duration-100 cursor-pointer hover:bg-slate-400">
      <h1 className="text-4xl text-black mr-6">{Number}</h1>
      <h1 className="text-2xl font-semibold">{Name} </h1>
    </div>
  );
};

export default StatRec;
