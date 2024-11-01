import React from "react";

const stats = [
  {
    id: 1,
    icon: "🗺️",
    label: "Franchisee",
    value: "932",
    bgColor: "bg-indigo-500",
  },
  { id: 2, icon: "👔", label: "Dealers", value: "754", bgColor: "bg-rose-400" },
  {
    id: 3,
    icon: "📅",
    label: "Service Providers",
    value: "40",
    bgColor: "bg-yellow-400",
  },
  { id: 4, icon: "🍽️", label: "Users", value: "32k", bgColor: "bg-indigo-900" },
];

const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-lg p-[14px] sm:w-[84%] shadow-current ml-3">
      {stats.map((stat) => (
        <div key={stat.id} className="flex  items-center text-center">
          <div
            className={`w-13 h-13 p-2 flex items-center justify-center rounded-full ${stat.bgColor} text-white text-2xl`}
          >
            {stat.icon}
          </div>
          <div className="flex flex-col px-1">
            <span className="text-gray-500  text-xs">{stat.label}</span>
            <span className="text-ms font-bold text-gray-800">
              {stat.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
