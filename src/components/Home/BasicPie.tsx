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
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <Card className="w-[32rem]  my-10 mx-10">
      <Tabs
        defaultValue="year"
        className="w-full justify-between flex flex-col ">
        <CardHeader className="w-full">
          <CardTitle className="flex flex-row w-full">
            {" "}
            <h1 className="text-3xl w-full self-right flex ">Market Share</h1>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week">Week </TabsTrigger>
              <TabsTrigger value="month">Month </TabsTrigger>
              <TabsTrigger value="year">Year </TabsTrigger>
            </TabsList>
          </CardTitle>
          <CardDescription>
            Here you find the market share in year , month , week{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 self-center">
          <TabsContent value="week">
            {" "}
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "Electronics" },
                    { id: 1, value: 15, label: "Food" },
                    { id: 2, value: 20, label: "Transportation" },
                  ],
                },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="month">
            {" "}
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 20, label: "Electronics" },
                    { id: 1, value: 45, label: "Food" },
                    { id: 2, value: 20, label: "Transportation" },
                  ],
                },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="year">
            {" "}
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "Electronics" },
                    { id: 1, value: 135, label: "Food" },
                    { id: 2, value: 20, label: "Transportation" },
                  ],
                },
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
