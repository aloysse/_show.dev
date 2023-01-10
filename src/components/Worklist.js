import React, { useEffect } from "react";
import MoreBtn from "./MoreBtn";
import WorkCard from "./WorkCard";

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
          <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2 grid-cols-1">
            {workListData.map((item, index) => {
              if (visibleNum && index < visibleNum) {
                // 有顯示數量限制
                return (
                  <WorkCard
                    key={index}
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
                  <WorkCard
                    key={index}
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
