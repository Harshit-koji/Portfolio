// src/data/ProjectData.js  (or wherever you keep data files)

// ⬇️ Import your images (change the filenames to match your real assets)
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";

// ⬇️ Export the array (professional pattern: data module, not a React component)
export const ProjectData = [
  {
    id: "p1",
    title: "World_Atlas",
    description:
      "The World Atlas is an interactive web application that provides information about different countries, including population, region, capital, currency, and more. This mini-project allows users to explore details about any country in the world using a simple and user-friendly interface. The data is dynamically fetched from an API, ensuring accurate and up-to-date information.",
    image: img1,
    liveDemo: "https://harshitworldatlas.netlify.app/",
    details: "https://example.com/aritmatika-solver/details",
    lable: ""
  },
  {
    id: "p2",
    title: "Soft_Shell",
    description:
      `The Softshell Website was a project assigned to me during my internship to test and improve my UI development skills. The goal was to build a fast, responsive, and modern website for the company, focusing on both performance and design quality. The site was structured into four main sections:
      
      Hero Section – Clean and engaging introduction to the brand.
      
      Why Choose Us Section – Highlighting the company’s strengths and values.
      
      Card Section – Displaying services or features in a structured layout.
      
      Testimonial Carousel – Showcasing client feedback dynamically.
      
      Contact Section – Easy way for users to connect with the company.`,
    image: img2,
    liveDemo: "https://softshellassign.netlify.app/",
    details: "https://example.com/autochat-discord/details",
    lable: ""
  },
  {
    id: "p3",
    title: "Bootstrap_5",
    description:
      "The Bootstrap 5 Practice Website is a project I created to strengthen my understanding and hands-on skills with the latest version of Bootstrap. In this website, I experimented with a wide range of Bootstrap classes, including layout utilities, grid system, typography, forms, buttons, and responsive design features. This project allowed me to explore the most useful and important classes to build modern, responsive, and well-structured web pages efficiently.",
    image: img3,
    liveDemo: "https://harshitbootstrap.netlify.app/",
    details: "https://example.com/buku-catatan/details",
    lable: ""
  },
  {
    id: "p4",
    title: "Weather_App",
    description:
      `The Weather Application is a simple and user-friendly web app that allows users to check real-time weather conditions for different countries and cities. Users can enter a location and instantly receive detailed weather information, including temperature, humidity, wind speed, and weather conditions. This project is designed to provide accurate and up-to-date weather data using a reliable API.
`,
    image: img4,
    liveDemo: "https://weatherharshit.netlify.app/",
    details: "https://example.com/todo-list/details",
    lable: ""
  },
  {
    id: "p5",
    title: "E_Commerce",
    description:
      "The E-Commerce Website was my first mini project built after learning JavaScript, designed to be a fully functional shopping site. It includes key features such as adding products to the cart, increasing or decreasing product quantities, and updating the cart dynamically. Through this project, I learned the fundamentals of building interactive web applications and strengthened my core JavaScript skills.",
    image: img5,
    liveDemo: "https://harshitecom.netlify.app/",
    details: "https://example.com/weather-dashboard/details",
    lable: ""
  },
  {
    id: "p6",
    title: "Modern_CSS",
    description:
      "The CSS3 Styled Website was my first mini project after learning CSS3, where I focused on creating a fully functional and visually appealing site. I experimented with different CSS properties and values, applied transitions and animations to enhance user interaction, and implemented media queries to ensure the website is fully responsive across devices.",
    image: img6,
    liveDemo: "https://harshitcss.netlify.app/",
    details: "https://example.com/expense-tracker/details",
    lable: ""
  },
  {
    id: "p7",
    title: "go_Get_well",
    description:
      "The GoGetWell Website was a project assigned to me during my internship to test and enhance my UI development skills. The task was to build a fast, responsive, and modern website for the company with a focus on performance and clean design. The website included four main sections:",
    image: img7,
    liveDemo: "https://harshitfirstassign.netlify.app/",
    details: "https://example.com/recipe-finder/details",
    lable: ""
  }
];

export default ProjectData;
