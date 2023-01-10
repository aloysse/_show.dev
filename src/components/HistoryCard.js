import React from "react";

const HistoryCard = ({ title, year, Svg, bg }) => {
  return (
    <li className="bg-white w-[260px] h-[330px] inline-flex flex-col items-center rounded-xl p-5 mr-6 snap-start ">
      <div className="bg-white flex-auto">
        <Svg />
      </div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-gray-400">{year}</p>
    </li>
  );
};

export default HistoryCard;
