import React from "react";
import SideBar from "../layerComponents/SideBar";
import Main from "../layerComponents/Main";
import PaginatedTable from "../layerComponents/PaginatedTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar className="w-full md:w-1/4 lg:w-1/5 bg-white" />

      {/* Main Content */}
      <div className="flex flex-col md:w-3/4 lg:w-3/5">
        <Main className="flex-grow p-4" />
        <div className="lg:flex">
          <PaginatedTable className="p-4" />
          <PaginatedTable className="p-4" />
        </div>
      </div>

      {/* side bar  */}
      <div className=" lg:flex flex-col items-center bg-white h-screen w-80 p-4 shadow-lg" style={{height:"100%"}}>
        {/* Top Section with Buttons and Avatar */}
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex space-x-3">
            <button className="flex items-center justify-center w-10 h-10 bg-white text-purple-600 rounded-full shadow hover:bg-gray-100 transition">
              <i className="bi bi-bell"></i>
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-white text-purple-600 rounded-full shadow hover:bg-gray-100 transition">
              <i className="bi bi-gear"></i>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40x40"
              alt="User Avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="text-left">
              <p className="text-sm font-semibold">Nabila A.</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="w-full mb-6  ">
          <h2 className="text-lg font-semibold text-gray-700">
            Recent Activities
          </h2>
          <p className="text-sm text-gray-500">You have 456 New Users</p>
          <div className="flex flex-col space-y-4 mt-4">
            {[
              "Samantha William",
              "Tony Soap",
              "Karen Hope",
              "Jordan Nico",
              "Nadia Adja",
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">{user}</p>
                    <p className="text-xs text-gray-500">Kochi</p>
                  </div>
                </div>
                <button className="text-purple-600">
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition">
            View More
          </button>
        </div>

        {/* Messages Section */}
        <div className="w-full mb-6 ">
          <h2 className="text-lg font-semibold text-gray-700">Messages</h2>
          {["Samantha William", "Tony Soap", "Jordan Nico"].map(
            (user, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">{user}</p>
                    <p className="text-xs text-gray-500">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">12:45 PM</p>
              </div>
            )
          )}
        </div>

        {/* Service Categories Section */}
        <div className="w-full mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Service Categories
          </h2>
          {["Mechanic", "House Keeping", "Plumber"].map((category, index) => (
            <div key={index} className="flex flex-col items-center mb-4">
              <div className="w-full h-20 bg-purple-200 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
