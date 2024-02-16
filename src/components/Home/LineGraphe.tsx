import * as React from "react";
import { BarChart } from "@mui/x-charts";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart } from "@mui/x-charts/LineChart";

export default function LineGraphe() {
  return (
    <Card className="w-[32rem] h-[32rem] my-10 mx-10">
      <Tabs
        defaultValue="year"
        className="w-full justify-between flex flex-col ">
        <CardHeader className="w-full">
          <CardTitle className="flex flex-row w-full">
            {" "}
            <h1 className="text-3xl w-full self-right flex mr-5 ">
              Income/Outcome
            </h1>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 self-center">
          <TabsContent value="week">
            {" "}
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="month">
            {" "}
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
              series={[
                {
                  curve: "linear",
                  data: [0, 5, 2, 6, 3, 9.3, 12, 2, 3, 12, 2],
                },
                {
                  curve: "linear",
                  data: [6, 3, 7, 9.5, 4, 2, 5, 2, 6, 3, 2, 3],
                },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="year">
            {" "}
            <LineChart
              xAxis={[
                {
                  data: [
                    "1990",
                    "2000",
                    "2003",
                    "2005",
                    "2007",
                    "2008",
                    "2018",
                  ],
                },
              ]}
              series={[
                { curve: "linear", data: [0, 5, 2, 6.3, 2, 3, 7] },
                { curve: "linear", data: [6, 3, 7, 2.2, 2, 1, 8] },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="password">hello</TabsContent>
        </CardContent>
        <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
      </Tabs>
    </Card>
  );
}
