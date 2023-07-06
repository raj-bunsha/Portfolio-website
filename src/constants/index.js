import {
  game,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  sql,
  pygame,
  next,
  threejs,
  django,
  iiitb,
  codeforces,
  codechef,
  camp,
  gdsc,
  potteryio,
  abstract,
  pharmosphere,
  filter,
  lynez,
  codetrack,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: game,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "pygame",
    icon: pygame,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "django",
    icon: django,
  }
];

const experiences = [
  {
    title: "Coding Expert",
    company_name: "Codeforces",
    icon: codeforces,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "An active member of the Codeforces community.",
      "Solving problems on Codeforces and Leetcode.",
      "An Expert in Data Structures and Algorithms with max rating of 1767.",
      "Completed 500+ problems and 90+ contests on  on Codeforces.",
    ],
  },
  // "A 5 star coder with a rating of 2000+.",
  {
    title: "★★★★★ Coder",
    company_name: "Codechef",
    icon: codechef,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "A 5 star coder with a rating of 2000+.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "8.225 CGPA",
    company_name: "IIIT Bangalore",
    icon: iiitb,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Currently pursuing B.Tech + M.Tech in Computer Science and Engineering.",
      "CGPA of 8.225 out of 10.",
      "Won the 1st prize in the Hackathon organized by the college.",
      "Actively participating in various coding competitions and hackathons.",
    ],
  },
  {
    title: "Camp Core member",
    company_name: "camp",
    icon: camp,
    iconBg: "#272727",
    date: "Jan 2023 - Present",
    points: [
      "Camp is a student run organization at IIIT Bangalore that aims to provide a platform for students to learn and grow.",
      "Collaborated with a team of 10 members to organize a coding competition.",
      "Developed a website for the competition using React JS and Tailwind CSS.",
      "Actively organizing events and workshops for the students.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "#272727",
    date: "Jan 2023 - Present",
    points: [
      "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies.",
      "Been a part of the video editing team for the GDSC IIIT Bangalore.",
      "Created promotional videos for the events organized by the club.",
      "Collaborated with a other members to create a videos of the events conducted.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Under 100 Rank in Codeforces Round #726 (Div. 2) and many more. Under 10 in Many codechef starters div 2.",
    name: "codeforces",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Won the 1st prize in the Hackathon organized by the college. Actively participating in various coding competitions and hackathons.",
    name: "Hacknite",
    designation: "Zense",
    company: "IIIT Bangalore",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Successfully been a part of the video editing team for the GDSC IIIT Bangalore. Edited and published videos of GDSC events.",
    name: "Video Editor",
    designation: "GDSC",
    company: "IIIT Bangalore",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pottery.io (WIP)",
    description:
      "Web based application that enables users to create and share pottery designs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: potteryio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lynez",
    description:
      "Game developed using HTML5 Canvas and Javascript. The game is inspired by the popular game Flappy Bird.",
    tags: [
      {
        name: "HTML5Canvas",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: lynez,
    source_code_link: "https://github.com/raj-bunsha/potteryio",
  },
  {
    name: "Abstract Art Generator",
    description:
      "Web application that enables users to create abstract art using the mouse. The user can also download the art as an image.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: abstract,
    source_code_link: "https://github.com/raj-bunsha/abstractartgenerator",
  },
  {
    name: "Filter Infinity",
    description:
      "Web platform for users to create and share filters. The users can also use the filters created by other users. The filtered images can be downloaded as well.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Jquery",
        color: "yellow-text-gradient",
      },
    ],
    image: filter,
    source_code_link: "https://github.com/raj-bunsha/filter-infinity",
  },
  {
    name: "CodeTrack",
    description:
      "Gnome extension that enables users to track their coding activity. The extension also helps users to set goals and track their progress. Users can solve coding problems directly from the extension.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "gnome-extension",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: potteryio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pharmosphere",
    description:
      "Desktop application that enables pharmacists to manage their inventory, generate bills, and manage their customers along with much more.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Swing",
        color: "pink-text-gradient",
      },
    ],
    image: pharmosphere,
    source_code_link: "https://github.com/raj-bunsha/pharmosphere",
  },
];

export { services, technologies, experiences, testimonials, projects };
