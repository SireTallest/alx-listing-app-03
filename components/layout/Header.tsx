import React from "react";
import Image from "next/image";

const accommodationTypes = [
  { icon: "/assets/living-room1.svg", label: "Rooms" },
  { icon: "/assets/mansion1.svg", label: "Mansion" },
  { icon: "/assets/farm1.svg", label: "Countryside" },
  { icon: "/assets/villa1.svg", label: "Villa" },
  { icon: "/assets/apartment1.svg", label: "Apartment" },
  { icon: "/assets/castle-tower1.svg", label: "Castle" },
  { icon: "/assets/swimming-pool1.svg", label: "Amazing pool" },
  { icon: "/assets/vacations1.svg", label: "Beachfront" },
  { icon: "/assets/home1.svg", label: "House" },
  { icon: "/assets/tent1.svg", label: "Camping" },
  { icon: "/assets/barn1.svg", label: "Farm house" },
  { icon: "/assets/cabin1.svg", label: "Cabins" },
  { icon: "/assets/island1.svg", label: "Island" },
  { icon: "/assets/cottage1.svg", label: "Lakefront" },
  { icon: "/assets/tree-house1.svg", label: "Tree House" },
  { icon: "/assets/palm-tree1.svg", label: "Tropical" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white ">
      {/* Top Bar with Travel Info */}
      <div className="bg-teal-600 text-white text-sm py-2 px-4 text-center">
        <span>
          ✈️ Overseas Trip? Get the latest information on travel guides
        </span>
        <button className="ml-2 bg-black bg-opacity-20 px-3 py-1 rounded text-xs hover:bg-opacity-30">
          More info
        </button>
      </div>

      {/* Main Header */}
      <div className="px-4 py-4 ml-20 mr-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-4xl font-bold">
              <span className="text-black">alx</span>
            </div>
          </div>

          {/* Search Section */}
          <div className="flex-1 max-w-3xl mx-8">
            <div className="flex bg-white border border-gray-200 rounded-full shadow-sm p-1">
              <div className="flex-1 px-4 py-2">
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  Location
                </div>
                <input
                  type="text"
                  placeholder="Search for destination"
                  className="w-full outline-none text-sm text-gray-500 placeholder-gray-400"
                />
              </div>
              <div className="border-l border-gray-200 px-4 py-2">
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  Check in
                </div>
                <input
                  type="text"
                  placeholder="Add date"
                  className="w-24 outline-none text-sm text-gray-500 placeholder-gray-400"
                />
              </div>
              <div className="border-l border-gray-200 px-4 py-2">
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  Check out
                </div>
                <input
                  type="text"
                  placeholder="Add date"
                  className="w-24 outline-none text-sm text-gray-500 placeholder-gray-400"
                />
              </div>
              <div className="border-l border-gray-200 px-4 py-2">
                <div className="text-xs font-semibold text-gray-900 mb-1">
                  People
                </div>
                <input
                  type="text"
                  placeholder="Add guest"
                  className="w-20 outline-none text-sm text-gray-500 placeholder-gray-400"
                />
              </div>
              <button className="bg-orange-500 text-white w-12 h-12 rounded-full hover:bg-orange-600 flex items-center justify-center self-center ml-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button className="bg-teal-600  text-white px-4 py-2 rounded-4xl hover:bg-teal-400 font-medium">
              Sign in
            </button>
            <button className="text-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 font-medium rounded-4xl">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="px-4 pb-4 pt-5 ml-17 mr-17">
        <div className="flex overflow-x-auto space-x-6 pb-2">
          {accommodationTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[60px] cursor-pointer group"
            >
              <div className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform">
                <Image
                  src={type.icon}
                  alt={type.label}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs text-gray-600 group-hover:text-gray-800 text-center whitespace-nowrap">
                {type.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
