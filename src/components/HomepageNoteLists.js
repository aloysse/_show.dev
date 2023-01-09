import React from "react";
import MoreBtn from "./MoreBtn";

const NoteItem = () => (
  <>
    <li className="sm:flex-[0_1_50%] flex-auto">
      <div className="flex pr-5">
        <div className="bg-white rounded-2xl">
          <img
            className="h-[120px] w-[120px]"
            src={require("@site/static/img/docusaurus.png").default}
            alt="img"
          />
        </div>
        <div className="ml-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-2">不想面對的 Prototype</h3>
          <p className="text-gray-400">JavaScript</p>
        </div>
      </div>
      <hr className="border-gray-600 w-full my-7" />
    </li>
  </>
);

const HomepageNoteLists = () => {
  const notesSection = {
    padding: "3em 0",
  };

  return (
    <div style={notesSection}>
      <div className="container">
        <div className="tailwind">
          <h2 className="text-3xl font-bold mb-6">Notes</h2>
          <ul className="flex flex-wrap">
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
          </ul>
          <div className="text-center mt-10">
            <MoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageNoteLists;
