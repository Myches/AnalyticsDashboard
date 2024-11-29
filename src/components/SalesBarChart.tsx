import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

interface SalesBarChartProps {
  data: { name: string; value: number }[];
}

const SalesBarChart: React.FC<SalesBarChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} layout="vertical" barSize={14}> 
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" style={{ fontSize: 10 }} />
      <Tooltip />
      <Bar dataKey="value" fill="#76ff03">
        <LabelList dataKey="value" position="top" fill="#000" fontSize={12} />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default SalesBarChart;
