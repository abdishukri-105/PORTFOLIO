import loops from "../images/loopstudios.jpg";
import ecommerce from "../images/e-commerce-screenshot.png";
import advice from "../images/active-states.jpg";
import desktop from "../images/desktop-preview.jpg";
import shukri from "../images/shukri.jpg";
import call from "../images/call.jpg";

const Projects = () => {
  return (
    <section className="mb-8 mt-8 mx-4 md:mx-8 lg:mx-16">
        <h1></h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1  gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="relative h-56">
          <div
            className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${loops})` }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
            <h3 className="text-white text-center text-xl font-bold">Loopstudios Landing Page</h3>
          </div>
        </div>
        <div className="relative h-56">
          <div
            className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${ecommerce})` }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
            <h3 className="text-white text-center text-xl font-bold">E-commerce Product Page</h3>
          </div>
        </div>
        <div className="relative h-56">
          <div
            className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${advice})` }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
            <h3 className="text-white text-center text-xl font-bold">Advice Generator App</h3>
          </div>
        </div>
        <div className="relative h-56">
          <div
            className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${desktop})` }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
            <h3 className="text-white text-center text-xl font-bold">Interactive Credit Card</h3>
          </div>
        </div>
        <div className="relative h-56">
          <div
            className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${desktop})` }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
            <h3 className="text-white text-center text-xl font-bold">Interactive Credit Card</h3>
          </div>
        </div>
         <div className="relative h-56">
          <div
            className="bg-cover bg-center h-full rounded-xl hover:cursor-pointer"
            style={{ backgroundImage: `url(${desktop})` }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
            <h3 className="text-white text-center text-xl font-bold">Interactive Credit Card</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
