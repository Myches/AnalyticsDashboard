

export interface ApiResponse {
    status: boolean;
    message: string;
    data: Report;
  }
  
  export interface Report {
    update: {
      percentage_change: string;
      date: string;
    };
    net_income: {
      amount: string;
      currency: string;
      percentage_change: string;
    };
    total_return: {
      amount: string;
      currency: string;
      percentage_change: string;
    };
    sales_report: {
      product_launched: string;
      ongoing_product: string;
      product_sold: string;
    };
    revenue: {
      amount: string;
      currency: string;
      percentage_change: string;
      break_down: {
        week: number;
        revenue: string;
        expense: string;
      }[];
    };
    total_view_performance: {
      view_count: string;
      sales: string;
      percentage: string;
      total_count: string;
    };
  }
  