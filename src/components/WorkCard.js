import React from "react";

const WorkCard = ({ title, description, URL, source, img }) => {
  return (
    <li className="group bg-[#343434] rounded-xl mr-5 mb-10">
      <a href={URL} target="_blank">
        <div className=" bg-white h-[150px] rounded-t-xl overflow-hidden">
          <a href={URL} target="_blank">
            <img
              className="h-full w-full object-cover ease-in duration-200 rounded-t-xl group-hover:scale-110"
              src={img}
              alt="wikipali"
            />
          </a>
        </div>
        <div className="px-6 py-6">
          <div className="flex justify-between mb-4 items-center">
            <a href={URL} target="_blank" className="group-hover:text-white">
              <h3 className="font-bold text-base mr-3">{title}</h3>
            </a>
            <a
              href={source}
              target="_blank"
              className=" px-2 py-1 font-medium rounded bg-[#737373] text-sm hover:scale-110 hover:text-white"
            >
              source
            </a>
          </div>
          <p className=" text-sm">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default WorkCard;
