import React from "react";
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt";

const MoreBtn = () => {
  return (
    <div className="tailwind">
      <button className="border-2 border-indigo-300 rounded-md px-3 pb-[3px] font-bold text-indigo-300">
        more
        <BiRightArrowAlt className="inline -mr-1" />
      </button>
    </div>
  );
};

export default MoreBtn;
