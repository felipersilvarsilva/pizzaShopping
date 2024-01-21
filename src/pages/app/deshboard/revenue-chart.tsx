import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from "recharts";

import colors from "tailwindcss/colors";

const data = [
  {
    data: "20/12",
    revenue: 4000,
  },
  {
    data: "20/12",
    revenue: 3000,
  },
  {
    data: "20/12",
    revenue: 4000,
  },
  {
    data: "20/12",
    revenue: 3000,
  },
];
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="data"
              tickLine={false}
              stroke="#888"
              axisLine={false}
              dy={16}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={88}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
