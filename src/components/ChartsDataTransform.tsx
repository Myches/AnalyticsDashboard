

import { Report } from "../types/report";

export const transformSalesData = (salesReport: Report['sales_report']) => [
  { name: "Launched", value: parseInt(salesReport.product_launched) },
  { name: "Ongoing", value: parseInt(salesReport.ongoing_product) },
  { name: "Sold", value: parseInt(salesReport.product_sold) },
];

export const transformRevenueData = (breakdown: Report['revenue']['break_down']) =>
  breakdown.map((item) => ({
    week: `Week ${item.week}`,
    revenue: parseInt(item.revenue, 10),
    expense: parseInt(item.expense, 10),
  }));
  
