import React from "react";
import DataContext from "../../context/DataContext";
import ApexChart from "./ApexChart";
import { useContext } from "react";
import Card from "./Card";
import CustomCalendar from "./CustomCalendar ";
import BarChart from "./BarChart ";
import LineChart from "./LineChart";
import BasicPie from "./BasicPie";
import MyResponsivePie from "./MyResponsivePie";


export default function Main() {
  const {} = useContext(DataContext);

  const data = [
    { id: "scala", label: "active users", value: 15 },
    { id: "javascript", label: "inactive users", value: 30 },
  ];

  return (
    <>
      <div className="flex-none ">
        <header className="p-4 lg:w-3/5 ">
          <div className="container mx-auto flex items-center">
            <div className="text-[12px] md:text-[20px] font-bold text-purple-700">
              Dashboard
            </div>
            <div
              className="flex items-center  md:px-2 lg:px-26 sm:ml-8p md:ml-50p"
             
            >
              <div className="relative">
                <input
                  type="text"
                  className="rounded-[20px] border rounded-md px-4 py-2"
                  placeholder="Search here..."
                />
                <button className="absolute top-[45%] right-[1rem] transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <Card />
        <ApexChart />
        <div className="flex">
          <CustomCalendar />
          <BarChart />
        </div>
        <LineChart />
        <div className="flex mx-3">
          <MyResponsivePie data={data} />
          <BasicPie />
        </div>
      </div>
    </>
  );
}
