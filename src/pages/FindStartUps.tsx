import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Sector, Startup } from "@/types";
// import Row from "@/components/Shared/Row";
import { DataTableDemo } from "@/components/FindStartups/DataTable";

const FindStartUps = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startupsNumber: number = 8;
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);

  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const getStartUps = async () => {
      try {
        let url = `${apiUrl}/startups?_page=${currentPage}&_limit=${startupsNumber}`;
        const res = await axios.get(url);
        if (res.status === 200) {
          const data = res.data;
          setStartups(data);
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const axiosErr = err as AxiosError;
          setError(axiosErr.message);
        }
      }
    };

    getStartUps();
  }, [apiUrl, currentPage, selectedSector]);

  useEffect(() => {
    const getStartUps = async () => {
      try {
        const url: string = `${apiUrl}/sectors`;
        const res = await axios.get(url);
        if (res.status === 200) {
          const data = res.data;
          setSectors(data);
        } else {
          setError("Server error");
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const axiosErr = err as AxiosError;
          setError(axiosErr.message);
        } else {
          setError("An error occurred");
        }
      }
    };
    getStartUps();
  }, [apiUrl]);

  return (
    <section className="w-full flex items-end flex-col justify-center gap-10">
      <DataTableDemo data={startups} />
    </section>
  );
};

export default FindStartUps;
