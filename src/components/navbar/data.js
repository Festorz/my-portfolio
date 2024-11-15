import tips from "../../data/images/tips_predictions.png";
import breakfast from "../../data/images/breakfast.png";
import mkulima from "../../data/images/mkulima.png";
import xcoin from "../../data/images/xcoin.png";
import farming_server from "../../data/images/Farming app server.png";
import bizBlock from "../../data/images/bizblock.png";

import {
  LocationOn,
  Email,
  PhoneInTalkOutlined,
  GitHub,
  LinkedIn,
  Facebook,
  Twitter,
} from "@material-ui/icons";

export const pages = [
  {
    id: 1,
    label: "Home",
    route: "/",
  },
  {
    id: 2,
    label: "About",
    route: "/about",
  },
  {
    id: 5,
    label: "Experience",
    route: "/experience",
  },
  {
    id: 3,
    label: "works",
    route: "/work",
  },
  {
    id: 4,
    label: "Contacts",
    route: "/contact",
  },
];

export const scoredata = [
  {
    id: 1,
    number: "20+",
    value: "PROJECTS COMPLETED",
    stars: 5,
  },
  {
    id: 2,
    number: "4+",
    value: "YEARS OF EXPERIENCE",
    stars: 5,
  },
  {
    id: 3,
    number: "20+",
    value: "HAPPY CLIENTS",
    stars: 5,
  },
  {
    id: 4,
    number: "30+",
    value: "CUSTOMER REVIEWS",
    stars: 5,
  },
];

export const skills = [
  {
    id: 1,
    skill: "Node Js",
    level: 90,
  },
  {
    id: 4,
    skill: "Flutter Dart",
    level: 90,
  },
  {
    id: 6,
    skill: "DJango",
    level: 85,
  },
  {
    id: 9,
    skill: "SQL & No-SQL DATABASES",
    level: 80,
  },
  {
    id: 13,
    skill: "Next Js",
    level: 80,
  },
  {
    id: 2,
    skill: "React Js",
    level: 80,
  },
  {
    id: 5,
    skill: "Python",
    level: 70,
  },
  {
    id: 7,
    skill: "PHP",
    level: 70,
  },
  {
    id: 8,
    skill: "Laravel",
    level: 70,
  },
  {
    id: 13,
    skill: "Spring Boot",
    level: 60,
  }
];

export const experience = [
  {
    id: 5,
    role: "SOFTWARE ENGINEER",
    duration: "APRIL 2024 - CURRENT",
    institution: "WEBMASTERS (K) Ltd",
    duties: [
      {
        id: 1,
        role: "Undertook Projects Lead Role in a number of projects developments from conception to deployment in different platforms including appstore, playstore and amazon using docker and kurbernetes",
      },
      {
        id: 6,
        role: "Maintained and upgraded existing systems using diverse technologies including react native,django, NodeJs, laravel and flutter while utilizing enterprise web services including shared hosting, amazon, appstore and playstore.",
      },
      {
        id: 2,
        role: "Worked on database design and optimization, creating and implementing complex SQL queries to extract and manipulate data.",
      },
      {
        id: 3,
        role: "Designed and developed enteprise web and mobile applications from conception to deployment using node Js and flutter utilizing enterprise web services including shared hosting, amazon, appstore and playstore",
      },
      {
        id: 4,
        role: "Worked on database design and optimization, creating and implementing complex SQL queries to extract and utilize data.",
      },
      {
        id: 5,
        role: "Developed RESTful web services for internal and external use, integrating with various enterprise systems.",
      },
      {
        id: 7,
        role: "Led projects from conception to deployment, ensuring timely delivery and high-quality software solutions.",
      },
      {
        id: 8,
        role: "Participated in code reviews and provided constructive feedback to improve team members' code quality.",
      },
    ],
  },
  {
    id: 1,
    role: "SOFTWARE ENGINEER",
    duration: "JAN 2021 - APRIL 2024",
    institution: "Icore Information Systems",
    duties: [
      {
        id: 1,
        role: "Designed, developed and maintained web applications using Node Js, ReactJs, Django, spring boot, Laravel and Codeigniter.",
      },
      {
        id: 6,
        role: "Designed and developed mobile applications using Flutter.",
      },
      {
        id: 2,
        role: "Worked on database design and optimization, creating and implementing complex SQL queries to extract and manipulate data.",
      },
      {
        id: 3,
        role: "Developed Restful web services for internal and external use, integrating with various enterprise systems",
      },
      {
        id: 4,
        role: "Led projects from conception to deployment, ensuring timely delivery and high-quality software solutions",
      },
      {
        id: 5,
        role: "Participated in code reviews and provided constructive feedback to improve team members' code quality.",
      },
    ],
  },
  {
    id: 1,
    role: "WEB DEVELOPER",
    duration: "JAN 2019 - FEB 2024",
    institution: "Self-Employed",
    duties: [
      {
        id: 1,
        role: "Designed and developed fullstack web applications using React, Node.js, Django incorporating SQL & NO-SQL databases.",
      },
      {
        id: 2,
        role: "Implemented responsive designs and optimized performance for optimal user experience.",
      },
      {
        id: 3,
        role: "Collaborated with cross-functional teams, including UX/UI designers and product managers, to deliver solutions that meet the client needs.",
      },
      {
        id: 4,
        role: "Troubleshooted and debugged bugs in code, implementing solutions and improvements to enhance functionality and performance",
      },
      {
        id: 5,
        role: "Developed and maintained APIs for integration with frontend applications.",
      },
    ],
  },
  {
    id: 3,
    role: "FLUTTER DEVELOPER",
    duration: "JAN 2019 - FEB 2024",
    institution: "Self-employed",
    duties: [
      {
        id: 1,
        role: "Designed and developed mobile applications using Flutter.",
      },
      {
        id: 2,
        role: "Implemented responsive designs and optimized application performance for optimal user experience",
      },
      {
        id: 3,
        role: "Wrote and debugged tests in flutter applications, implementing solutions and improvements to enhance app functionality and performance.",
      },
      {
        id: 4,
        role: "Developed REST APIs for internal and external use, integrating with flutter applications.",
      },
    ],
  },
  {
    id: 4,
    role: "ICT INTERNSHIP",
    duration: "APR 2019 - AUG 2019",
    institution: "Kenya National Library Nakuru",
    duties: [
      {
        id: 1,
        role: "Computer networking and server administration",
      },
      {
        id: 2,
        role: "Installation And configuration of hardware and software",
      },
      {
        id: 3,
        role: "Troubleshooting software and hardware",
      },
      {
        id: 4,
        role: "User Authorization and Authentication",
      },
      {
        id: 5,
        role: "Maintainance of ICT Equipements",
      },
      {
        id: 6,
        role: "Management of e-resources and OPAC and Library Management System (Amlib)",
      },
      {
        id: 7,
        role: "Wireless Internet configuration to library users",
      },
      {
        id: 8,
        role: "Updating ICT inventory Database",
      },
    ],
  },
];

export const projects = [
  {
    id: 11,
    label: "BizBlock App",
    image: bizBlock,
    github: "https://github.com/Festorz/supplier",
    server:
      "https://play.google.com/store/apps/details?id=com.apps.jobdevs.utilapps.supplier",
    tech: "Flutter,Django, Firebase",
  },
  {
    id: 1,
    label: "Breakfast Recipes App",
    image: breakfast,
    github: "https://github.com/Festorz/BreakFast-recipes-app---Flutter",
    server:
      "https://play.google.com/store/apps/details?id=com.coolrecipes.breakfast.recipes",
    tech: "Dart Flutter, API",
  },
  {
    id: 2,
    label: "Football Tips Web Application",
    image: tips,
    github: "https://github.com/Festorz/football-analysis-application-django",
    server: "https://betstika.co.ke/",
    tech: "Django, React JS, API",
  },
  {
    id: 3,
    label: "Mkulima Business App",
    image: mkulima,
    github: "https://github.com/Festorz/Farming-App---Dart-Flutter",
    server:
      "https://play.google.com/store/apps/details?id=com.jordandevs.apps.mkulima",
    tech: "NodeJS, Express, AWS, Flutter, ",
  },
  {
    id: 5,
    label: "Xcoin App",
    image: xcoin,
    github: "https://github.com/Festorz/xcoin_wallet",
    server: "",
    tech: "Flutter, firebase,",
  },
  {
    id: 6,
    label: "Farming App Server",
    image: farming_server,
    github: "https://github.com/Festorz/Farming-App-Server---Node-Js",
    server:
      "https://play.google.com/store/apps/details?id=com.jordandevs.apps.mkulima",
    tech: "NodeJS, Express, AWS Services",
  },
];

export const contacts = [
  {
    id: 1,
    title: "Location",
    label: "Nairobi Kenya",
    icon: <LocationOn />,
  },
  {
    id: 2,
    title: "Email",
    label: "festaskirui@gmail.com",
    icon: <Email />,
  },
  {
    id: 3,
    title: "Mobile Number",
    label: "+254 798 663646",
    icon: <PhoneInTalkOutlined />,
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "Github",
    link: "https://github.com/festorz",
    icon: <GitHub fontSize="large" />,
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/festus-kirui-566451205/",
    icon: <LinkedIn fontSize="large" />,
  },
  {
    id: 3,
    title: "Facebook",
    link: "",
    // link: 'https://www.facebook.com/festorz.kirui.98/',
    icon: <Facebook fontSize="large" />,
  },
  {
    id: 4,
    title: "Twitter",
    link: "",
    // link: 'https://twitter.com/festaskirui',
    icon: <Twitter fontSize="large" />,
  },
];
