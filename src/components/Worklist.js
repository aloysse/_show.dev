import React, { useEffect } from "react";
import MoreBtn from "./MoreBtn";

const workListData = [
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
  {
    title: "wikipāli 協作翻譯平台",
    description: "上座部佛教巴利聖典，參與 UI/UX 設計，以及前端開發。",
    URL: "https://www-hk.wikipali.org/app/pcdl/index.php",
    source: "https://github.com/iapt-platform/mint",
    img: require("@site/static/img/docusaurus.png").default,
  },
];

const Workitem = ({ title, description, URL, source, img }) => {
  return (
    <li className=" min-h-[320px] bg-[#343434] rounded-xl mr-5 mb-10">
      <div className=" bg-white h-[150px] rounded-t-xl overflow-hidden">
        <a href={URL} target="_blank">
          <img
            className="h-full w-full object-cover ease-in duration-200 rounded-t-xl hover:scale-110"
            src={img}
            alt="wikipali"
          />
        </a>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between mb-3 items-center">
          <a href={URL} target="_blank" className=" hover:text-white">
            <h3 className="font-bold text-base">{title}</h3>
          </a>
          <a
            href={source}
            target="_blank"
            className="px-2 py-1 font-medium rounded bg-[#737373] text-sm hover:bg-[] hover:text-white"
          >
            source
          </a>
        </div>
        <p className=" text-sm">{description}</p>
      </div>
    </li>
  );
};

const Worklist = ({ displayTitle, visibleNum }) => {
  const worksSection = {
    padding: "3em 0",
  };
  useEffect(() => {
    console.log(visibleNum);
  }, []);
  return (
    <div style={worksSection}>
      <div className="container">
        <div className="tailwind">
          {displayTitle ? (
            <h2 className="text-3xl font-bold mb-6">Works</h2>
          ) : (
            ""
          )}
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 grid-cols-1">
            {workListData.map((item, index) => {
              if (visibleNum && index < visibleNum) {
                // 有顯示數量限制
                return (
                  <Workitem
                    title={item.title}
                    description={item.description}
                    URL={item.URL}
                    source={item.source}
                    img={item.img}
                  />
                );
              } else if (!visibleNum) {
                // 無顯示數量限制
                return (
                  <Workitem
                    title={item.title}
                    description={item.description}
                    URL={item.URL}
                    source={item.source}
                    img={item.img}
                  />
                );
              }
            })}
          </ul>
          {visibleNum && visibleNum < workListData.length ? (
            <div className="text-center mt-10">
              <MoreBtn link={"./Works"} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Worklist;
