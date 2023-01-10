import React, { useEffect, useRef } from "react";
import HistoryCard from "@site/src/components/HistoryCard";

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

const HistorySection = () => {
  const historyRef = useRef(null);
  const historyTitleRef = useRef(null);

  useEffect(() => {
    const defualtX = historyTitleRef.current.offsetLeft;
    historyRef.current.children[0].style.padding = ` 0 ${defualtX}px`;
  });

  const goNextCard = (direction) => {
    const defualtX = historyTitleRef.current.offsetLeft;

    requestAnimationFrame(() => {
      const scrollLeft = historyRef.current.scrollLeft;
      const itemWidth =
        parseInt(historyRef.current.scrollWidth - defualtX * 2) /
        history.length;
      const remainingWidth =
        historyRef.current.scrollWidth - defualtX * 2 - scrollLeft;

      if (
        direction === "right" &&
        remainingWidth >= window.innerWidth - defualtX
      ) {
        historyRef.current.scrollLeft = scrollLeft + itemWidth;
      } else if (direction === "left") {
        historyRef.current.scrollLeft = scrollLeft - itemWidth;
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="tailwind">
          <h2 className="text-2xl font-bold mb-8" ref={historyTitleRef}>
            History
          </h2>
        </div>
      </div>
      <div className="tailwind">
        <div className="relative mb-20">
          <div
            className="overflow-x-scroll snap-start scroll-smooth"
            ref={historyRef}
          >
            <ul className="flex flex-nowrap w-fit ease-linear">
              {history.map((item, index) => (
                <HistoryCard
                  key={index}
                  title={item.title}
                  year={item.year}
                  Svg={item.Svg}
                />
              ))}
            </ul>
          </div>
          <button
            onClick={() => goNextCard("left")}
            className="w-[50px] h-[50px] bg-gray-800/50 absolute top-1/2 -translate-y-1/2 left-8 rounded-full flex justify-center items-center"
          >
            <div className=" border-t-2 border-r-2 h-1/3 w-1/3 rotate-[225deg] translate-x-[2px]" />
          </button>
          <button
            onClick={() => goNextCard("right")}
            className="w-[50px] h-[50px] bg-gray-800/50 absolute top-1/2 -translate-y-1/2 right-8 rounded-full flex justify-center items-center"
          >
            <div className=" border-t-2 border-r-2 h-1/3 w-1/3 rotate-45 -translate-x-[2px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HistorySection;
