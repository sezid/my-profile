import plus from './plus.png'
import github from './github.png'
import phone from './phone.png'
import location from './location.png'
import linkedin from './linkedin.png'
import email from './email.png'
import web from './web.png'
import headshot from './headshot.png'
import facebook from './facebook.png'
import project_1 from './project_1.png'
import cert_1 from './cert-1.png'
import cert from './certificate.png'
import cert_2 from './cert-2.png'
import project_2 from './project_2.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import background from './background.webp'
import arrow from './right-arrow.png'



export const assets ={
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
  arrow
}


export const projects = [
  {
      name:'Khidaaa',
      image: project_1,
      summary: "A food delivery website made using React only. It contains little features such as adding items to cart and filtering category of foods amongst others. Frontend part is completed, but more features to come in the future.",
      github:"https://github.com/sezid/khidaaa",
      link:"https://khidaaa.netlify.app"
    },
  {
    name:"Dapper",
    image:project_2,
    summary:"An ecommerce clothing store from built using react and tailwind CSS. The project is still incomplete however, expecting to add some features soon.",
    github:"https://github.com/sezid/e-commerce",
    link:""
  }  
]

export const news=[
  {
    number:1,
    date:'13/08/2018',
    title:"O Levels Completed"
  },

  {
    number:2,
    date:'15/08/2020',
    title:"A Levels Completed"
  },
  {
    number:3,
    date:'28/09/2020',
    title:"Started Studying Computer Science and Engineering at BRAC University"
  },
  {
    number:4,
    date:'01/10/2022',
    title:"Changed Undergraduate Program from CSE to CS"
  },
  {
    number:5,
    date:'01/10/2024',
    title:"Graduated from BRAC University"
  }

]

