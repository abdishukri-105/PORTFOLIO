import React from 'react';
import loops from "../images/loopstudios.jpg";
import beautybliss from "../images/Beautybliss.png";
import Hahahub from "../images/HAHA-HUB.png";
import READRIOT from "../images/READRIOT.png";
import article254 from "../images/article254.png";
import call from "../images/call.jpg";

const projects = [
  {
    image: beautybliss,
    title: 'Beauty Bliss',
    description: 'An E-commerce application built with Rails API and React',
    websiteLink: 'https://beauty-bliss-ul2a.vercel.app/',
  },
  {
    image: Hahahub,
    title: 'Meme Generator',
    description: 'Rails and react meme generator app for moringa school project ',
    websiteLink: 'https://haha-hub.vercel.app/',
  },
  {
    image: READRIOT,
    title: 'Library app',
    description: 'React application that utilizes google books api',
    websiteLink: 'https://read-riot.vercel.app/',
  },
  {
    image: article254,
    title: 'blog page',
    description: 'article web application Built with RUBY and React ',
    websiteLink: 'https://article254.vercel.app/',
  },
  {
    image: loops,
    title: 'Loopstudios Landing Page',
    description: 'This is a small project that I did from Frontend Mentor',
    websiteLink: 'https://example.com/loopstudios-demo',
  }
];

const Projects = () => {
  return (
    <section className="mb-44 mx-4 md:mx-8 lg:mx-16">
      <div className="mb-16">
        <h2 className="text-3xl mb-6 font-bold text-center">My Recent Work</h2>
        <p className="text-center text-lg">
          Here are a few past projects I've worked on. Want to{' '}
          <span className="ml-2 underline hover:cursor">see more?</span>
        </p>
      </div>

      <div className="max-w-screen-xl py-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="relative h-64">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opacity-100 transition-opacity duration-700 bg-blue-900 bg-opacity-100 rounded-xl hover:opacity-90">
              <h3 className="text-white mb-4 text-center text-xl font-bold">
                {project.title}
              </h3>
              <div className="hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-center">{project.description}</p>
                <div className="mt-9 text-center">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border-2 border-purple-900 rounded-full text-white hover:bg-purple-900"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;






// import loops from "../images/loopstudios.jpg";
// import ecommerce from "../images/e-commerce-screenshot.png";
// import advice from "../images/active-states.jpg";
// import desktop from "../images/desktop-preview.jpg";
// import shukri from "../images/shukri.jpg";
// import call from "../images/call.jpg";

// const Projects = () => {
//   return (
//     <section className="mb-8 mt-8 mx-4 md:mx-8 lg:mx-16">
//       <div className="mb-16">
//         <h1 className="text-3xl mb-6 font-bold text-center">My Recent Work</h1>
//         <p className="text-center text-lg">Here are a few past projects I've worked on. Want to   
//           <span className="ml-2 underline hover:cursor">see more?</span></p> 
//       </div>
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
//         <div className="relative h-56">
//           <div
//             className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
//             style={{ backgroundImage: `url(${loops})` }}
//           ></div>
//           <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opaciy-0 opacity-100 transition-opacity duration-300 bg-purple-600 bg-opacity-80 rounded-xl">
//             <h3 className="text-white text-center text-xl font-bold opacity-100 hover:opacity-0 transition-opacity duration-300">
//               Loopstudios Landing Page
//             </h3>
//             <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
//               <p className="text-white text-center">
//                 Brief description of the Loopstudios Landing Page project...
//               </p>
//               <div className="mt-4">
//                 <a
//                   href="https://github.com/your-username/loopstudios"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-white"
//                 >
//                   GitHub Repo
//                 </a>
//                 <span className="mx-2 text-gray-300">|</span>
//                 <a
//                   href="https://example.com/loopstudios-demo"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-white"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Repeat the above structure for other projects */}
//       </div>
//     </section>
//   );
// };

// export default Projects;


// <div className="relative h-56">
// <div
//   className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
//   style={{ backgroundImage: `url(${ecommerce})` }}
// ></div>
//    <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opaciy-0 opacity-100 transition-opacity duration-300 bg-orange-600 bg-opacity-80 rounded-xl">
//       <h3 className="text-white mb-4 text-center text-xl font-bold opacity-100 hover:opacity-0 transition-opacity duration-300">
//             Loopstudios Landing Page
//       </h3>
//       <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
//           <p className="text-white text-center ">
//               Brief description of the Loopstudios Landing Page project...
//           </p>
//           <div className="mt-9 text-center ">
//               <a href="https://github.com/your-username/loopstudios" target="_blank"  rel="noopener noreferrer" className="text-gray-300 hover:text-white"
//               > GitHub Repo </a>
//               <span className="mx-2 text-gray-300">|</span>
//               <a href="https://example.com/loopstudios-demo" target="_blank"  rel="noopener noreferrer"  className="text-gray-300  border-2 border-gray-600 rounded-full px-5 py-3 hover:bg-gray-600"
//               > visit website </a>
//           </div>
//       </div>
// </div>
// </div>





// <div className="relative h-56">
// <div
//   className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
//   style={{ backgroundImage: `url(${advice})` }}
// ></div>
// <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-80 rounded-xl">
//   <h3 className="text-white text-center text-xl font-bold">Advice Generator App</h3>
// </div>
// </div>
// <div className="relative h-56">
// <div
//   className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
//   style={{ backgroundImage: `url(${desktop})` }}
// ></div>
// <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity duration-300 bg-purple-600 bg-opacity-80 rounded-xl">
//   <h3 className="text-white text-center text-xl font-bold">Interactive Credit Card</h3>
// </div>
// </div>
// <div className="relative h-56">
// <div
//   className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
//   style={{ backgroundImage: `url(${desktop})` }}
// ></div>
// <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity duration-300 bg-purple-600 bg-opacity-80 rounded-xl">
//   <h3 className="text-white text-center text-xl font-bold">Interactive Credit Card</h3>
// </div>
// </div>
// <div className="relative h-56">
// <div
//   className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
//   style={{ backgroundImage: `url(${desktop})` }}
// ></div>
// <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity duration-300 bg-purple-600 bg-opacity-80 rounded-xl">
//   <h3 className="text-white text-center text-xl font-bold">Interactive Credit Card</h3>
// </div>
// </div>