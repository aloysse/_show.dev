import React, { useRef, useState, useEffect } from "react";
import Layout from "@theme/Layout";
import PageHeader from "@site/src/components/PageHeader";
import HistorySection from "./HistorySection";
import HomepageWorklist from "@site/src/components/Worklist";

const skillList = [
  {
    title: "HTML5",
    Svg: require("@site/static/img/tech_logo/HTML5.svg").default,
  },
  {
    title: "CSS3",
    Svg: require("@site/static/img/tech_logo/CSS3.svg").default,
  },
  {
    title: "JavaScript",
    Svg: require("@site/static/img/tech_logo/Javascript.svg").default,
  },
  {
    title: "TypeScript",
    Svg: require("@site/static/img/tech_logo/TypeScript.svg").default,
  },
  {
    title: "React",
    Svg: require("@site/static/img/tech_logo/React.svg").default,
  },
  { title: "Git", Svg: require("@site/static/img/tech_logo/Git.svg").default },
  {
    title: "TailwindCSS",
    Svg: require("@site/static/img/tech_logo/TailwindCSS.svg").default,
  },
  {
    title: "Bootstrap",
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
];

const history = [
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
  {
    title: "創立木下曰本工作室",
    year: 2013,
    Svg: require("@site/static/img/tech_logo/Bootstrap.svg").default,
  },
];

const Skill = ({ Svg }) => (
  <div className="w-[100px] h-[100px] bg-gray-700 rounded-full inline-flex justify-center items-center mr-[20px]">
    <Svg />
  </div>
);

const about = () => {
  return (
    <Layout>
      <>
        <PageHeader />
        <div className="container">
          <div className="tailwind">
            <div className="my-20 max-w-[800px]">
              <p>
                互動設計、8年平面設計經驗，同時擅長動態影像、網頁切版。2017年赴斯里蘭卡出家深入學習冥想，2021年返台。投入學習前端技術，現階段多維護電商網站，有過幾個小型專案的經驗。目前主要使用React框架。
              </p>
            </div>
            <div className="mb-20 flex">
              <div className="mr-10">
                <div>
                  {skillList.map((item, index, arr) => {
                    if (index < arr.length / 2) {
                      return <Skill key={index} Svg={item.Svg} />;
                    }
                  })}
                </div>
                <div className="ml-[60px] whitespace-nowrap">
                  {skillList.map((item, index, arr) => {
                    if (index >= arr.length / 2) {
                      return <Skill key={index} Svg={item.Svg} />;
                    }
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold">Skill</h2>
                <p className="text-gray-300">
                  目前集中於使用前端技術，集中研究React框架應用，正在學習TypeScript，將其運用於主要語言。
                </p>
              </div>
            </div>
          </div>
        </div>
        <HistorySection />
        <HomepageWorklist />
      </>
    </Layout>
  );
};

export default about;
