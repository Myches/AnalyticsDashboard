

import { RiArrowDownSLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import SalesBarChart from "./SalesBarChart";
import RevenueChart from "./RevenueChart";
import TotalRevenueChart from "./ToTalRevenueChart";
import { transformSalesData } from "./ChartsDataTransform";
import { transformRevenueData } from "./ChartsDataTransform";
import { useReport } from "../hooks/useFetchData";
import LoadingSpinner from "./LoadingSpinner";
import { IoIosArrowForward } from "react-icons/io";


export default function Overview (){



  const { report, error, loading } = useReport();
  

   
  
    if (loading) return <div className ="flex justify-center items-center">
      <LoadingSpinner   />
    ;</div>
    if (error) return <p>Error: {error}</p>;
    if (!report) return <p>No data available</p>; 
    

   
   
    const total_view_performance = {
      percentage: "55%",
      sales: "31%",
      total_count: "432k",
      view_count: "14%",
    };
    
    
    const total_view_data = [
      { name: "Percentage", value: parseFloat(total_view_performance.percentage.replace("%", "")) || 0 },
      { name: "Sales", value: parseFloat(total_view_performance.sales.replace("%", "")) || 0 },
      { name: "View Count", value: parseFloat(total_view_performance.view_count.replace("%", "")) || 0 },
    ];  
    const salesReportData = transformSalesData(report.sales_report);
  const revenueData = transformRevenueData(report.revenue.break_down);


  const formattedDate = new Date(report.update?.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  
return (
    
<div className="h-full w-full p-4">
      <div className="space-x-2 flex  "> <p className="text-3xl text-[#8b8b8b] font-medium">Sales Admin </p> <RiArrowDownSLine  className="mt-2"  size={30}  /> </div>
      <div className="w-[100%] h-px bg-gray-500 mt-4"></div>
      <div className="md:flex-row flex flex-col p-2 space-x-2">
      <div className=" md:w-[80%] w-full">
         <div className="md:flex-row flex flex-col items-center justify-between">
        <div><p className="text-2xl text-[#464646] font-semibold">Dashboard</p> <p className="text-md">An any way to manage sales with care and precision</p></div> 
         <div className="border rounded-full border-[#cfcfcf] flex p-2 mt-4 font-semibold space-x-2">< CiCalendarDate className="mt-1"  />  <p>January 2024 - June 2024</p><RiArrowDownSLine  size={15} className="mt-1" /> </div>
      </div>

      <div className="my-4 md:grid md:grid-cols-3 grid grid-cols-1 md:gap-x-2 gap-y-2">
         <div className="w-3/3 p-6 space-y-4 h-48 border rounded-2xl bg-[#012706]">
         <div className="flex  space-x-2"><div className="border rounded-full bg-[#f00f0e] mt-2  w-3 h-3"></div><p className="text-white">Update</p></div>
        <div> <p className="pt-3 text-gray-300 text-sm"> {formattedDate}</p>
        <p className="text-white text-md">Sales revenue increased <span className="text-[#3cdf4f]">{report.update.percentage_change}</span> 1 week</p> </div> 
       <div className="flex space-x-2 text-gray-300 text-sm"><p >see statistics</p> <span className="pt-1"><IoIosArrowForward  /> </span> </div>  
         </div>
         <div className="w-3/3 h-48 border rounded-2xl bg-[#012706] p-6 text-white  space-y-8">
         <div className="flex justify-between items-around  "><p className="">Net Income</p> <p>< BsThreeDots    /></p></div>
         <p className="text-3xl space-x-2"><span className="align-super text-sm">{report.net_income.currency}</span><span>{report.net_income.amount}</span></p>
         <p className="flex gap-x-1"><BsGraphUpArrow  className="text-[#96ffa2]"/> <span className="text-[#96ffa2]">{report.net_income.percentage_change}</span> from last month</p>
         </div>
         <div className="w-3/3 h-48 border rounded-2xl bg-[#012706] p-6 text-white  space-y-8">
         <div className="flex justify-between items-around  "><p className="">Total Return</p> <p> < BsThreeDots    /></p></div>
         <p className="text-3xl space-x-2"><span className="align-super text-sm">{report.total_return.currency}</span><span>{report.total_return.amount}</span></p>
         <p className="flex gap-x-1" ><BsGraphDownArrow className="text-[#f6a1a1]"  /> <span className="text-[#f6a1a1]">{report.total_return.percentage_change}</span>  from last month</p>
         </div>
      </div>
      <div className="md:grid md:grid-cols-2 grid grid-cols-1  md:gap-x-4 gap-y-4">
      <div className="md:w-4/2 w-full h-[250px] space-y-3 border rounded-3xl bg-gray-200 p-6" >
      <div className="flex justify-between items-around  "><p className="font-bold">Sales Report</p> <p>< BsThreeDots    /></p></div>

      <SalesBarChart data={salesReportData} />
      
      </div>
      <div className="md:w-3/2 w-full h-[250px] border rounded-3xl bg-gray-200 space-y-2 lg:space-y-4  p-6">
      <div className="flex justify-between items-center  "><p className="font-bold">Revenue</p> <div className="flex space-x-2">
         <div className="space-x-2 flex"> <div className="border rounded-lg bg-[#047857]  w-5 h-5"></div><p className="text-[14px] font-semibold">Income</p></div>
         <div className="space-x-2 flex"> <div className="border rounded-lg bg-[#A3E635]  w-5 h-5"></div><p className="text-[14px] font-semibold">Expenses</p></div>
         </div></div>
         <div className="w-full h-px bg-gray-500 my-2"></div>
         <div className="flex justify-between items-center ">
         <p className="text-lg font-bold space-x-2"><span className="align-super text-sm">{report.revenue.currency}</span><span>{report.revenue.amount}</span></p>
         <p className="flex gap-x-1" ><BsGraphDownArrow className="text-[#96ffa2] font-bold"  /> <span className="text-[#3cdf4f] font-bold">{report.revenue.percentage_change}</span>  from last month</p>
         </div>

  
         <RevenueChart data={revenueData} />
         
     

      </div>
      </div>
      </div>

      <div className="flex flex-col md:w-[25%] w-full my-6 h-full space-y-6 ">
      <div className=" border rounded-lg border-gray-600 p-4">
         <p className="flex justify-center items-center font-bold">Total View Performance</p>
         <div className="w-full h-px bg-gray-500 my-4"></div>
         <div className="h-[250px] flex justify-center items-center">
        
        <TotalRevenueChart  data={total_view_data}  />


          </div>
         <p className="text-sm text-center">Here are some tips to improve your core</p>
         <button className="p-2 w-full border rounded-lg border-black font-bold my-4">Guide views</button>
         <div className="w-full h-px bg-gray-500 my-4"></div>
         <div className="flex justify-center items-center  space-x-2">
         <div className="border rounded-lg bg-[#9bf32a]  w-2 h-2"></div><p className="text-[10px] font-semibold">View Count</p>
         <div className="border rounded-lg bg-[#1e8e08]  w-2 h-2"></div><p className="text-[10px] font-semibold">Percentage</p>
         <div className="border rounded-lg bg-[#e08c39] w-2 h-2"></div><p className="text-[10px] font-semibold">Sales</p>
         </div>
         
      </div>
      <div className="h-full  border rounded-lg  p-4 bg-[#ccc7bb] space-y-6">
         <p className="text-center text-black text-lg font-bold">Level your sales management to the next level</p>
         <p className="text-sm">An any way to manage sales with care and precision</p>
         <button className="p-2 w-full border rounded-lg text-white font-semibold my-4 bg-[#296d31]">Update to Siohioma+</button>
      </div></div>
      </div>
   </div>
     
)
}