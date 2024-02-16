import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



type Startup =  {
  name: string;
  sector: string;
  marketCap: number;
  activeYears: number;
  region: string;
  numberOfInvestors: number;
}

type Sector = {
  name : string;
}

const FindStartUps = () => {
  const [startUps, setStartUps] = useState<Startup[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);
  const startupsNumber: number = 5;
  const [ sectors, setSectors ] = useState<Sector[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);


  const apiUrl = import.meta.env.VITE_REACT_API_URL;



  useEffect(() => {
const getStartUps = async () => {
  setIsLoading(true);
  try {
    let url = `${apiUrl}/startups?_page=${currentPage}&_limit=${startupsNumber}`;
    if (searchTerm.trim() !== "") {
      url += `&name_like=${searchTerm}`;
      } else if (selectedSector !== "") {
      url += `&sector=${selectedSector}`;
    }
    const res = await axios.get(url);
    if (res.status === 200) {
      const totalCount = res.headers['x-total-count'];  
      const data = res.data;
      setStartUps(data);
      const totalPages = Math.ceil(totalCount / startupsNumber);
      setTotalPages(totalPages);
      setIsLoading(false);
    } else {
      setError("Server error");
      setIsLoading(false);
    }
} catch (err: unknown) {
  if (axios.isAxiosError(err)) {
    const axiosErr = err as AxiosError;
    setError(axiosErr.message);
  } else {
    setError("An error occurred");
  }
  setIsLoading(false);
}
};

    getStartUps();
  }, [apiUrl, currentPage, searchTerm, selectedSector]);

  useEffect(() => {
    const getStartUps = async () => {
      setIsLoading(true);
      try {
        const url: string = `${apiUrl}/sectors`;
        const res = await axios.get(url);
        if (res.status === 200) {
          const data = res.data;
          setSectors(data);
          setIsLoading(false);
        } else {
          setError("Server error");
          setIsLoading(false);
        }
} catch (err: unknown) {
  if (axios.isAxiosError(err)) {
    const axiosErr = err as AxiosError;
    setError(axiosErr.message);
  } else {
    setError("An error occurred");
  }
  setIsLoading(false);
}
    };
    getStartUps();
  }, [apiUrl]);

  useEffect(() => {
    setFilteredStartups(startUps);
  }, [startUps]);


  


  return (
    <section className="bg-[#EFF2F4] w-full h-screen overflow-hidden flex items-center flex-col justify-center border-none rounded-md gap-20">
      {error && <h2>{error}</h2>}
      {isLoading ? (
        <div className="spinner">
        </div>
      ) : (
        <>
      <div className="flex items-center justify-end px-20 gap-5">
        <input 
          placeholder="Search" 
          className="inputSearch px-2 placeholder:text-gray-400 font-bold bg-white w-[300px] py-3 rounded-lg drop-shadow-md" 
          type="search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />


    <Select onValueChange={(value) => setSelectedSector(value)}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder={selectedSector || "Filter By Sector"} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {sectors.map((sector: Sector, index) => (
          <SelectItem 
            className=""
            key={index}
            value={sector.name}
          >
            {sector.name}
          </SelectItem>
        ))}
        <SelectItem className="" onClick={() => setSelectedSector("")} value="Filter By Sector">
          back to all
        </SelectItem>
      </SelectContent>
    </Select>


      </div>
      <Table className="bg-white drop-shadow-md text-black w-[90%] mx-auto">
        <TableHeader>
          <TableRow className="text-black font-bold">
            <TableHead className="w-[10%] border-r-2 text-black font-bold">Name</TableHead>
            <TableHead className="w-[10%] border-r-2 text-black font-bold">Sector</TableHead>
            <TableHead className="w-[10%] border-r-2 text-black font-bold">Market Cap</TableHead>
            <TableHead className="w-[10%] border-r-2 text-black font-bold">Active Years</TableHead>
            <TableHead className="w-[10%] border-r-2 text-black font-bold">Region</TableHead>
            <TableHead className="w-[10%] border-r-2 text-black font-bold">Number Of Investors</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStartups.map((startup, index) => (
            <TableRow key={index}>
              <TableCell className="border-r-2">{startup.name}</TableCell>
              <TableCell className="border-r-2">{startup.sector}</TableCell>
              <TableCell className="border-r-2">{startup.marketCap}</TableCell>
              <TableCell className="border-r-2">{startup.activeYears}</TableCell>
              <TableCell className="border-r-2">{startup.region}</TableCell>
              <TableCell className="border-r-2">{startup.numberOfInvestors}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
<Pagination className="">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious aria-disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
    </PaginationItem>
    {Array.from({ length: totalPages }).map((_, index) => (
      <PaginationItem key={index}>
        <PaginationLink
          href="#"
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? 'pagination-active' : ''}
        >
          {index + 1}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext aria-disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>


        </>
      )}
    </section>
  );
};

export default FindStartUps;
