import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  android,
  flutter,
  java,
  salesforce,
  // python,
  springboot,
  azure,
  // aws,
  php,
  laravel,
  sqlite,
  mysql,
  firebase,
  // html,
  reactjs,
  tailwind,
  // nodejs,
  mongodb,
  git,
  sumay,
  ags,
  nityajal,
  vap,
  api,
  aams,
  spring_rest,
} from "../assets";

export const navs = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const skills = [
  {
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "Android Native Developer",
    icon: mobile,
  },
  {
    title: "Cloud Practitioner",
    icon: backend,
  },
  {
    title: "Spring Boot Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },

  {
    name: "Android",
    icon: android,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];
const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "AGS Health",
    icon: ags,
    iconBg: "#000",
    date: "February 2024 - Present",
    points: [
      "Designed and supported RESTful APIs for the ezdi products with Spring Boot.",
      "Utilized Mirth Connect to streamline data transformation and routing workflows in healthcare applications.",
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "Sumay Infotech",
    icon: sumay,
    iconBg: "#000",
    date: "July 2023 - January 2024",
    points: [
      "Developed and maintaining Aura and LWC components.",
      "Integrated Apex classes with Box API.",
      "Flow Builder to maintain the screen flow integration.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "NityaJal",
    icon: nityajal,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - June 2023",
    points: [
      "NityaJal is a startup company to employ an IOT device to automate the watering of plants at home .",
      "Developed an Android app that could control the IOT device from remote location.",
      "Also provided assistance for developing the React JS website of NityaJal",
      "Worked with ESP8266 and Arduino Uno module to integrate the app with IOT device.",
    ],
  },
];

const projects = [
  {
    name: "CampusNavigator",
    description: "Spring Boot based University & College API Suite",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/prog-ankit/Campus-Navigator",
  },
  {
    name: "Voice Assistant App",
    description:
      "Flutter Application with ChatGPT API and Dall-E Image Generation",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "ChatGPT",
        color: "green-text-gradient",
      },
      {
        name: "Dall-E Image",
        color: "pink-text-gradient",
      },
    ],
    image: vap,
    source_code_link: "https://github.com/prog-ankit/voice-assistant",
  },
  {
    name: "Attendance and Academia Management",
    description:
      "Android Native and Laravel Application to manage and handle various academic activities.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: aams,
    source_code_link: "https://github.com/prog-ankit/AAMS",
  },
  {
    name: "Course Karo",
    description:
      "A Spring Boot backend with React JS front application to illustrate CRUD operations.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: spring_rest,
    source_code_link: "https://github.com/prog-ankit/Spring-Rest-API",
  },
  // {
  //     name: "Trip Guide",
  //     description:
  //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //         {
  //             name: "nextjs",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "supabase",
  //             color: "green-text-gradient",
  //         },
  //         {
  //             name: "css",
  //             color: "pink-text-gradient",
  //         },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  // },
];

export { skills, technologies, experiences, projects };
