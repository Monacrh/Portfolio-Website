import { FaPython, FaReact, FaCss3, FaHtml5, FaNodeJs  } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { DiVisualstudio, DiFirebase, DiJavascript1, DiMysql, DiNodejs } from "react-icons/di";

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
        jobtitle: "Member of GDSC",
        where: "Telkom Bandung GDSC",
        date: "2022",
    },
    {
        jobtitle: "Internship in ASE Lab",
        where: "ASE Laboratory Telkom University",
        date: "2024",
    },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
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
    {
        name:"Node",
        icon: FaNodeJs,
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
        imgframe: "/To-Do-Frame.png",
        overview:"This is my to-do app and my first project that have a ghibli style",
        purpose:"This is my to-do app and my first project that have a ghibli style, I make this to-do app cause It’s a great way to learn some key skills, It’s a simple CRUD app so I can learn basic HTTP requests, some HTML, CSS and JavaScript and I also can learnt how to implement my imagination design to this project. By building a to-do app, I gain hands-on experience with essential programming concepts, algorithms, and best practices. This practical project helps solidify my understanding and prepares me for more complex applications in the future.",
        whatido:"Cause this is my individual project, I'm full responsible in UI, Algorithm etc."
    },
    {
        img: "/tic-tac-toe.png",
        description: "This is a simple tic-tac-toe game with ghibli style.",
        link: "https://ghiblitictactoe-bryans-projects-ce7304ff.vercel.app/",
        imgframe: "/TTT-Frame.png",
        overview:"This is my Tic-Tac-Toe game with ghibli style, a classic and engaging two-player game that allows users to compete against each other in a grid-based format. The game features a clean and intuitive user interface, designed to enhance the user experience while incorporating interactive elements. Players take turns marking their chosen cells with either an X or an O, but rather use X and O I use Totoro (Ghibli Character), aiming to align three symbols in a row, column, or diagonal to win the game. ",
        purpose:"I developed this Tic-Tac-Toe game as my first major project to practice and solidify my programming skills. Through this project, I aimed to learn and apply various essential concepts, including:",
        whatido:"Cause this is my individual project, I'm full responsible in UI, Algorithm etc."

    },
    {
        img: "/calc.png",
        description: "This is a simple calculator with html, css, and js only.",
        link: "https://simple-calculator-using-html-css.vercel.app/",
        imgframe:"/calc.png ",
        overview:"This is my calculator app, designed to perform essential arithmetic operations such as addition, subtraction, multiplication, and division. It features a user-friendly interface that ensures easy input and quick responses, making it suitable for everyday calculations. This project is a great starting point for learning about building interactive applications.",
        purpose:"I created this calculator as part of my learning journey to develop key programming skills. It allowed me to explore the following concepts and techniques, Mathematical Logic, Event Handling, State Management ",
        whatido:"Cause this is my individual project, I'm full responsible in UI, Algorithm etc."
    },
    {
        img: "/chat-web.png",
        description: "This is my first website chat using javascript, html, css and firebase to store the data.",
        link: "https://ghiblichatapp-bryans-projects-ce7304ff.vercel.app/",
        imgframe:"/Chat-Frame.png ",
        overview:"This is my first big project, real-time chat using without number (using email), so you don't need to use phone number to chat with your friends, family, etc, this project use firebase for simple authentication, firestrore and storage.",
        purpose:"I developed this project to improve my understanding about firebase authentication, firestore, storage ",
        whatido:"Cause this is my individual project, I'm full responsible in FrontEnd and Backend."
    },
    {
        img: "/Arjuna.png",
        description: "This is my first team project using Flutter.",
        link: "https://github.com/ananda17gb/arjunachicken-foodorderapp",
        imgframe:"/Arjuna.png ",
        overview:"This is my first app team (2 people) project using Flutter and spreadsheet for the database order.",
        purpose:"I developed this app to finish my Data Structure course and learn a little bit about flutter, the order will be storage in excel/spreadsheet ",
        whatido:"I'm full responsible in FrontEnd."
    },
    {
        img: "/Temajuk.png",
        description: "This is team project to deploy a website for social INNOVILLAGE PROJECT.",
        link: "https://visittemajuk.com",
        imgframe:"/Temajuk-Frame.png ",
        overview:"This is a visittemajuk website, similar like visitlondon, where you can know what you need to do when you want to go to temajuk, we use Figma for our UI/UX and Flutter to developed the website",
        purpose:"We developed this website, to fulfill our client request (Lecturer) for Innovillage Project",
        whatido:"I'm responsible in UI/UX designer."
    },
    {
        img: "/RPL.png",
        description: "This is team project to make a website for KTM submission.",
        link: "https://github.com/rafifpurnomo/Tugas-Intern_ASE-LAB",
        imgframe:"/RPL-Frame.png ",
        overview:"This is a KTM submission website, where you can make a submission for your KTM, for framework we use react.js as a for Front-End and Express.js as backend, we also use SQL for store the database",
        purpose:"We developed this project to fulfill internship in RPLGDC, and make the submission KTM easier",
        whatido:"Cause I'm the only Front-End in my team, I'm fully responsible in Front-End Engineer."
    },
    {
        img: "/petadopt.png",
        description: "This is my first mobile app using react native.",
        link: "https://github.com/Monacrh/petadopt-react",
        imgframe:"/petadopt.png ",
        overview:"This mobile application is designed to facilitate pet adoption in Indonesia, providing users with an intuitive and user-friendly platform to connect with various animal shelters and rescues. Users can browse through a wide selection of adoptable pets, including dogs, cats, and other animals, each accompanied by detailed profiles that include images and description. The app aims to promote responsible pet ownership and encourage more people to consider adopting pets rather than purchasing them. ",
        purpose:"I developed this project as a practical learning experience to deepen my understanding of React Native, a powerful framework for building mobile applications. Through this project, I aimed to enhance my skills in mobile app development. I wanted to explore the unique challenges and opportunities presented by building an app for a social cause—helping to find loving homes for pets in need. By creating this app, I hope to contribute to the community and raise awareness about the importance of animal adoption while also refining my technical abilities.",
        whatido:"This is my individual project, so I responsible in my UI/UX, Algorithm, Firebase."
    },
    {
        img: "/UI_learn.png ",
        description: "This is my practice to implement UI/UX in flutter .",
        link: "https://github.com/Monacrh/ui_learn",
        imgframe:"/UI_learn.png ",
        overview:"This is a UI for LoginPage ",
        purpose:"I developed this project to learn how to implementing the UI/UX into Flutter",
        whatido:"This is my practice for implementing UI/UX."
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