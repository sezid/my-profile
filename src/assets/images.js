import plus from "./plus.webp";
import github from "./github.webp";
import phone from "./phone.webp";
import location from "./location.webp";
import linkedin from "./linkedin.webp";
import email from "./email.webp";
import web from "./web.webp";
import headshot from "./headshot.webp";
import facebook from "./facebook.webp";
import project_1 from "./project_1.webp";
import cert_1 from "./cert-1.webp";
import cert from "./certificate.webp";
import cert_2 from "./cert-2.webp";
import project_2 from "./project_2.webp";
import menu_icon from "./menu_icon.webp";
import dropdown_icon from "./dropdown_icon.webp";
import background from "./background.webp";
import arrow from "./right-arrow.webp";
import project_3 from "./project_3.webp"

export const assets = {
  plus,
  github,
  email,
  location,
  phone,
  linkedin,
  web,
  headshot,
  facebook,
  project_1,
  cert_1,
  cert,
  cert_2,
  project_2,
  menu_icon,
  dropdown_icon,
  background,
  arrow,
  project_3
};

export const projects = [
  {
    name: "Khidaaa",
    image: project_1,
    summary:
      "A food delivery website made using React only. It contains little features such as adding items to cart and filtering category of foods amongst others. Frontend part is completed, but more features to come in the future.",
    github: "https://github.com/sezid/khidaaa",
    link: "https://khidaaa.netlify.app",
  },
  {
    name: "Dapper",
    image: project_2,
    summary:
      "An ecommerce clothing store from built using React and Tailwind CSS. The project is still incomplete however, expecting to add some features soon.",
    github: "https://github.com/sezid/e-commerce",
    link: "https://dappar.netlify.app",
  },
  { name: "LIIA Smart Inc",
    image: project_3,
    summary:"LIIA Smart Inc Official website built on React and Tailwind CSS and hosted on a live domain. Features include form integration to recieve queries or responses. More features such as job application submissions to be added soon.",
    github:"https://github.com/sezid/LIIA-website",
    link:"https://www.liiasmart.com" 

  }
  
];

export const news = [
  {
    number: 1,
    date: "13/08/2018",
    title: "O Levels Completed",
  },

  {
    number: 2,
    date: "15/08/2020",
    title: "A Levels Completed",
  },
  {
    number: 3,
    date: "28/09/2020",
    title:
      "Started Studying Computer Science and Engineering at BRAC University",
  },
  {
    number: 4,
    date: "01/10/2022",
    title: "Changed Undergraduate Program from CSE to CS",
  },
  {
    number: 5,
    date: "01/10/2024",
    title: "Graduated from BRAC University",
  },
  {
    number: 6,
    date: "05/01/2025",
    title: "Started working in LIIA Smart Inc.",
  },
];
