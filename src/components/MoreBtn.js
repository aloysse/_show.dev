import React from "react";
import Link from "@docusaurus/Link";
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";

const MoreBtn = ({ link }) => {
  return (
    <div className="tailwind">
      <Link
        to={link}
        className="group hover:border-indigo-200 hover:text-indigo-200 border border-indigo-300 rounded-md inline-flex items-center py-1 pl-4 pr-3 font-bold text-indigo-300"
      >
        more
        <BiChevronRight className=" text-lg inline -mb-[1px] group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default MoreBtn;
