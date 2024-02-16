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

import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <Card className="col-span-3">
      <Tabs
        defaultValue="year"
        className="w-full justify-between flex flex-col "
      >
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
        <CardContent className="space-y-3 self-center w-full">
          <TabsContent value="week" className="w-full">
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
              height={300}
            />
          </TabsContent>
          <TabsContent value="month" className="w-full">
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
              height={300}
            />
          </TabsContent>
          <TabsContent value="year" className="w-full">
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
