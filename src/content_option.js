import { FaPython, FaReact, FaCss3, FaHtml5,  } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { DiVisualstudio, DiFirebase, DiJavascript1, DiMysql } from "react-icons/di";

const logotext = "BRY4N";
const meta = {
    title: "Bryan Dhaniel",
    description: "I’m Bryan Dhaniel, I am a Software and AI engineer enthusiast",
};

const introdata = {
    title: "I’m Bryan Dhaniel",
    animated: {
        first: "I'm 20 years old",
        second: "I code random things",
        third: "My hobby sleep",
    },
    description: "I’m Bryan Dhaniel, I am a Software and AI engineer enthusiast, passionate with mobile, AI model and Web Development, as well as like to learn new thing.",

};

const dataabout = {
    title: "a bit about my self",
    aboutme: "I’m Bryan Dhaniel, 20 years old, I am a Software and AI engineer enthusiast, passionate with mobile, AI model and Web Development, as well as like to learn new thing",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        // value: 90,
        icon: FaPython,
    },
    {
        name: "VsCode",
        // value: 85,
        icon: DiVisualstudio,
    },
    {
        name: "Javascript",
        // value: 80,
        icon: DiJavascript1,
    },
    {
        name: "React",
        // value: 60,
        icon: FaReact,
    },
    {
        name: "Firebase",
        // value: 85,
        icon: DiFirebase,
    },
    {
        name: "Figma",
        icon: FiFigma,
    },
    {
        name: "Css",
        icon: FaCss3,
    },
    {
        name: "HTML",
        icon: FaHtml5,
    },
    {
        name: "MySql",
        icon: DiMysql,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "/to-do.png",
        description: "This is my to-do app with ghibli style.",
        link: "https://ghibli-to-do-app.vercel.app/",
    },
    {
        img: "/tic-tac-toe.png",
        description: "This is a simple tic-tac-toe game with ghibli style.",
        link: "https://ghiblitictactoe-bryans-projects-ce7304ff.vercel.app/",
    },
    {
        img: "/calc.png",
        description: "This is a simple calculator with html, css, and js only.",
        link: "https://simple-calculator-using-html-css.vercel.app/",
    },
    {
        img: "/chat-web.png",
        description: "This is my first website chat using javascript, html, css and firebase to store the data.",
        link: "https://ghiblichatapp-bryans-projects-ce7304ff.vercel.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "bryandhaniel123@gmail.com",
    YOUR_FONE: "-",
    description: "Get in touch with me ------>",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_paznmhn",
    YOUR_TEMPLATE_ID: "template_ih0oaep",
    YOUR_USER_ID: "cxIlO7zUhieRsIRkP",
};

const socialprofils = {
    github: "https://github.com/Monacrh",
    youtube: "https://www.youtube.com/channel/UCqJwyxrh9hD2FuCREEgVhCg",
    linkedin: "https://www.linkedin.com/in/bryan-dhaniel-5b8953258/",
    instagram: "https://www.instagram.com/bryandhaniel/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};