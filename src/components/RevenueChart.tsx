import React from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

interface RevenueChartProps {
  data: { week: string; revenue: number; expense: number }[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height="70%">
    <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" tick={false} />
      <YAxis />
      <Tooltip />
      <Bar dataKey="revenue" fill="#047857" name="Revenue" />
      <Bar dataKey="expense" fill="#A3E635" name="Expense" />
    </BarChart>
  </ResponsiveContainer>
);

export default RevenueChart;
