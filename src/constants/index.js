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
    nityajal,
    vap,
    aams,
    spring_rest
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
        title: "Salesforce Developer",
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
        title: "Salesforce Developer",
        company_name: "Sumay Infotech",
        icon: sumay,
        iconBg: "#000",
        date: "July 2023 - Pursuing",
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

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
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

export { skills, technologies, experiences, testimonials, projects };