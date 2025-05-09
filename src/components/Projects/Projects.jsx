// import { useState, useEffect } from "react";
// import React from "react";
// import { assets, projects } from "../../assets/images";
// import { NavLink } from "react-router-dom";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(false);


//   const handleNextImage = () => {
//     setFade(true); 
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
//       setFade(false); 
//     }, 500);
//   };

//   useEffect(() => {
//     const interval = setInterval(handleNextImage, 5000); 

//     return () => clearInterval(interval); 
//   }, [currentIndex]);

//   return (
//     <div className="flex flex-row gap-7 bg-slate-100 py-10 items-center justify-center h-[300px] md:h-[500px]">

//       <div className="relative w-[150px] h-[100px] md:w-1/3 md:h-[250px] md:overflow-hidden">
//       <NavLink to="/project_page">
//         <img
//           src={projects[currentIndex].image}
//           alt=""
//           className={`object-cover w-full h-full transition-all duration-500 ease-in-out ${
//             fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
//           }`}
//         />
//         </NavLink>
//       </div>


//       <div className="flex flex-col w-1/2 text-lg items-left pt-5 gap-3">
//         <h1 className="md:text-4xl font-poppins">Projects</h1>
//         <h2 className="font-poppins text-[15px] md:text-2xl">{projects[currentIndex].name}</h2>
//         <p className="text-xs sm:text-lg font-poppins">{projects[currentIndex].summary}</p>


//         <div className="flex justify-end">
//           <img
//             className="w-[25px] md:w-[35px] p-2 hover:bg-white hover:border-2 rounded-[5px] cursor-pointer"
//             src={assets.arrow}
//             onClick={handleNextImage}
//             alt="Next"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import { useState, useEffect } from "react";
import React from "react";
import { assets, projects } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  const handleNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-row gap-7 bg-slate-100 py-10 items-center justify-center h-[300px] md:h-[500px]">
      <div className="relative w-[150px] h-[100px] md:w-1/3 md:h-[250px] md:overflow-hidden">
        {!loaded && <p className="absolute text-center w-full">Loading...</p>} 
        <NavLink to="/project_page">
          <img
            src={projects[currentIndex].image}
            alt=""
            className={`object-cover w-full h-full transition-all duration-500 ease-in-out ${
              fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            onLoad={() => setLoaded(true)}
          />
        </NavLink>
      </div>

      <div className="flex flex-col w-1/2 text-lg items-start pt-5 gap-3">
        <h1 className="md:text-4xl font-poppins">Projects</h1>
        <h2 className="font-poppins text-[15px] md:text-2xl">{projects[currentIndex].name}</h2>
        <p className="text-xs sm:text-lg font-poppins">{projects[currentIndex].summary}</p>

        <div className="flex justify-end">
          <img
            className="w-[25px] md:w-[35px] p-2 hover:bg-white hover:border-2 rounded-[5px] cursor-pointer"
            src={assets.arrow}
            onClick={handleNextImage}
            alt="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
