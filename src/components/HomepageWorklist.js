import React from "react";
import MoreBtn from "./MoreBtn";

const Workitem = () => {
  return (
    <li className="min-h-[320px] bg-[#343434] rounded-xl mr-5 mb-10">
      <div className="bg-white h-[150px] rounded-t-xl">
        <img
          className="h-full w-full object-cover rounded-t-xl"
          src={require("@site/static/img/docusaurus.png").default}
          alt="wikipali"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between mb-3 items-center">
          <h3 className="font-bold text-base">wikipāli 協作翻譯平台</h3>
          <a href="#" className="px-2 py-1 rounded bg-[#737373] text-sm">
            source
          </a>
        </div>
        <p className=" text-sm">
          上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。
        </p>
      </div>
    </li>
  );
};

const HomepageWorklist = () => {
  const worksSection = {
    padding: "3em 0",
  };
  return (
    <div style={worksSection}>
      <div className="container">
        <div className="tailwind">
          <h2 className="text-3xl font-bold mb-6">Works</h2>
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 grid-cols-1">
            <Workitem />
            <Workitem />
            <Workitem />
            <Workitem />
            <Workitem />
            <Workitem />
          </ul>
          <div className="text-center mt-10">
            <MoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageWorklist;
