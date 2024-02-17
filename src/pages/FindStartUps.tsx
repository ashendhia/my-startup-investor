import axios from "axios";
import { useEffect, useState } from "react";

import { Sector, Startup } from "@/types";
// import Row from "@/components/Shared/Row";
import { DataTableDemo } from "@/components/FindStartups/DataTable";

const FindStartUps = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [currentPage] = useState<number>(0);
  const [, setSectors] = useState<Sector[]>([]);
  const [selectedSector] = useState<string>("");

  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const getStartUps = async () => {
      try {
        let url = `${apiUrl}/startups?page=${currentPage}`;
        const res = await axios.get(url);
        if (res.status === 200) {
          const data = res.data;
          setStartups(data);
        }
      } catch (err: unknown) {
        console.log(err);
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
        }
      } catch (err: unknown) {
        console.log(err);
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
