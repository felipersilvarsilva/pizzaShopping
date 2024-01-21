import { DayOrderAmountCard } from "./day-orders-amount-card";
import { MonthCancelOrderAmountCard } from "./month-canceled-orders-amount-card";
import { MonthOrderAmountCard } from "./month-orders-amount-card";
import { MonthRevenueCard } from "./month-revenue-card";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <MonthRevenueCard />
        <MonthOrderAmountCard />
        <DayOrderAmountCard />
        <MonthCancelOrderAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
        <RevenueChart />
      </div>
    </div>
  );
}