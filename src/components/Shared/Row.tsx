import { Startup } from "@/types";
import { TableCell, TableRow } from "../ui/table";

const Row = ({ startup, index }: { startup: Startup; index: number }) => {
  return (
    <TableRow key={index}>
      <TableCell className="border-r-2">{startup.name}</TableCell>
      <TableCell className="border-r-2">{startup.sector}</TableCell>
      <TableCell className="border-r-2">{startup.marketCap}</TableCell>
      <TableCell className="border-r-2">{startup.activeYears}</TableCell>
      <TableCell className="border-r-2">{startup.region}</TableCell>
      <TableCell className="border-r-2">{startup.numberOfInvestors}</TableCell>
    </TableRow>
  );
};

export default Row;
