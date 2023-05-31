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
