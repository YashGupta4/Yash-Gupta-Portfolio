import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    the_sparks_foundation,
    genpact,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
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
        name: "MongoDB",
        icon: mongodb,
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
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Upcoming Technical Consultant",
        company_name: "Genpact",
        icon: genpact
        ,
        iconBg: "#383E56",
        date: "Soon",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Developed and launched EasyBank, a user-friendly mobile banking app.",
            "Streamlined account management with machine learning algorithms.",
        ],
    },
    {

        title: "Android Developer",
        company_name: "The Sparks Foundation",
        icon: the_sparks_foundation,
        iconBg: "#383E56",
        date: "May 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Developed and launched EasyBank, a user-friendly mobile banking app.",
            "Streamlined account management with machine learning algorithms.",
            "Skills: Mobile App Development, Machine Learning, Programming, Data Analysis, Problem Solving, Security and Privacy, Continuous Learning.",
        ],
    },
    {
        title: "Internet of Things Intern",
        company_name: "AdInfocom Systems",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "June 2023 - August 2023",
        points: [
            "Developed weather reporting system using BMP180 and Raspberry Pi.",
            "Implemented algorithms on Raspberry Pi 3 for weather forecast measurements.",
            "Skills: Hardware Knowledge, Programming (C), Sensor Integration, Data Processing, IoT Integration, Problem-Solving.",
        ],
    },
    
    
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Yash proved me wrong.",
        name: "Vasundhara Verma",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Yash does.",
        name: "Hardik Bahri",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Yash optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Shivang Srivastava",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    
];

const projects = [
    {
        name: "Face Recognition System",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "OpenCV",
                color: "green-text-gradient",
            },
            {
                name: "PhpmyAdmin",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/YashGupta4/Facial-Recognition-Website",
    },
    {
        name: "Stadium Management",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "OOPS",
                color: "green-text-gradient",
            },
            {
                name: "Programming",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/YashGupta4/Stadium-Management",
    },
    {
        name: "Tic-Tac-Toe App",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Android Studio",
                color: "green-text-gradient",
            },
            {
                name: "Kotlin",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/YashGupta4/App_Tic_Tac_Toe",
    },
    {
        name: "Gesture-Driven Artistry - Air Canvas App",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "ava",
                color: "blue-text-gradient",
            },
            {
                name: "Android Studio",
                color: "green-text-gradient",
            },
            {
                name: "Kotlin",
                color: "pink-text-gradient",
            },
        ],
        image: the_sparks_foundation,
        source_code_link: "https://github.com/YashGupta4/App_Tic_Tac_Toe",
    },
];

export { services, technologies, experiences, testimonials, projects };