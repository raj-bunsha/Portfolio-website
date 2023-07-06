import React from "react";
import { SectionWrapper } from "../hoc";

const Details = () => {
  return (
    <div className="w-full">
      {/* Create a div with title About Me */}
      {/* Write a nice and clean text of me and then style it beautifully using tailwind */}
      {/* Then add a small div for find me on and add the links to github,insta,twitter and linkedin there */}
      <h1 className="text-white text-[60px] font-bold text-center">
        About <span className="text-[#6e037c]">Me</span>
      </h1>
      <div className="flex flex-row w-full">
        <div className="flex justify-center items-center mt-10 w-full md:w-[75%] overflow-hidden">
            <p className="text-[#160119] text-[18px] font-medium text-center mt-5 px-[10%]">
                I am a Software Developer with a passion for creating interactive
                experiences for the web. I am currently pursuing my Bachelors in
                Computer Science and Engineering from{" "}
                <span className="text-[#6e037c]">IIIT, Bangalore</span>. I am a{" "}
                <span className="text-[#6e037c]">Full Stack Developer</span> with a keen
                interest in <span className="text-[#6e037c]">Game Development</span> and{" "}
                <span className="text-[#6e037c]">UI/UX Design</span>. I am also a{" "}
                <span className="text-[#6e037c]">Competitive Programmer</span> and a{" "}
                <span className="text-[#6e037c]">Machine Learning Enthusiast</span>.
            </p>
        </div>
        <div className="flex justify-center items-center mt-10 w-full md:w-[25%]">
            <img src="https://avatars.githubusercontent.com/u/56132780?v=4" alt="Raj" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Details, "aboutme");
