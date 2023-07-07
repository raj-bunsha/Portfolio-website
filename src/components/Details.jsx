import React from "react";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram } from "react-icons/fa";
import profile_photo from "../assets/profile_photo.png";

const Details = () => {
  return (
    <div className="w-full">
      {/* Create a div with title About Me */}
      {/* Write a nice and clean text of me and then style it beautifully using tailwind */}
      {/* Then add a small div for find me on and add the links to github,insta,twitter and linkedin there */}
      <h1 className="text-ptext text-[60px] font-bold text-center">
        About <span className="text-stext">Me</span>
      </h1>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-col justify-center items-center w-full sm:w-3/4 overflow-hidden bg-tertiary">
            <p className="text-ptext text-[18px] font-medium text-center mt-5 px-[10%]">
                I am a Software Developer with a passion for creating interactive
                experiences for the web. I am currently pursuing my Bachelors in
                Computer Science and Engineering from{" "}
                <span className="text-stext">IIIT, Bangalore</span>. I am a{" "}
                <span className="text-stext">Full Stack Developer</span> with a keen
                interest in <span className="text-stext">Game Development</span> and{" "}
                <span className="text-stext">UI/UX Design</span>. I am also a{" "}
                <span className="text-stext">Competitive Programmer</span> and a{" "}
                <span className="text-stext">Machine Learning Enthusiast</span>.
            </p>
            <p className="text-ptext text-[18px] font-medium text-center mt-5 px-[10%]">
                I am a <span className="text-stext">quick learner</span> and a{" "}
                <span className="text-stext">team player</span>. I am always looking
                for opportunities to learn and grow. I am currently looking for
                internships in the field of{" "} Computer Science and Engineering.
                I am also open to freelance projects.

            </p>
        </div>
        <div className="flex justify-center items-center w-full sm:w-1/4 bg-secondary">
            <img src={profile_photo} alt="Raj" className="h-[75%]" />
        </div>
      </div>
      {/* Write a div for connect with me */}
      {/* Add the links to github,insta,twitter and linkedin there */}
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-ptext text-[60px] font-bold text-center">
          Connect <span className="text-stext">With Me</span>
        </h1>
        <p className="text-ptext text-[18px] font-medium text-center mt-5 px-[10%]">
          Feel free to reach out to me for any queries or just to say hi!
        </p>
        <div className="mt-10 flex flex-row justify-center space-x-6 items-center w-full">
          <a href="www.twitter.com" className="text-[60px] text-stext">
            <FaTwitter/>
          </a>
          <a href="linkedin.com" className="text-[60px] text-stext">
            <FaLinkedin/>
          </a>
          <a href="github.com" className="text-[60px] text-stext">
            <FaGithub/>
          </a>
          <a href="instagram.com" className="text-[60px] text-stext">
            <FaInstagram/>
          </a>
        </div>
        </div>
    </div>
  );
};

export default SectionWrapper(Details, "aboutme");
