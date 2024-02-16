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
export default function BasicBars() {
  return (
    <Card className="w-[32rem] h-[32rem] my-10 mx-10">
      <Tabs
        defaultValue="year"
        className="w-full justify-between flex flex-col ">
        <CardHeader className="w-full">
          <CardTitle className="flex flex-row w-full">
            {" "}
            <h1 className="text-3xl w-full self-right flex ">
              Market Cap Change
            </h1>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">year</TabsTrigger>
            </TabsList>
          </CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 self-center">
          <TabsContent value="week">
            {" "}
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Satur", "Sun", "Mon", "Tuesy", "Wedn", "Thur", "Fri"],
                },
              ]}
              series={[
                { data: [4, 3, 5, 6, 7, 3, 2] },
                { data: [1, 6, 3, 3, 4, 5, 6] },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="month">
            {" "}
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                },
              ]}
              series={[
                { data: [40, 30, 52, 63, 74, 35, 22, 21, 23, 44, 11, 92] },
                { data: [12, 63, 31, 32, 41, 52, 61, 11, 22, 33, 44, 55] },
              ]}
              width={500}
              height={300}
            />
          </TabsContent>
          <TabsContent value="year">
            {" "}
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
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
                { data: [4332, 3323, 5112, 6233, 7223, 3111, 22323] },
                { data: [13434, 63434, 334344, 34343, 44343, 54343, 64343] },
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
    // <div className="flex flex-col">
    //   <div className="flex flex-row w-full">
    //     <h1></h1>
    //   </div>
    //   <BarChart
    //     xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
    //     series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
    //     width={500}
    //     height={300}
    //   />
    // </div>
  );
}
