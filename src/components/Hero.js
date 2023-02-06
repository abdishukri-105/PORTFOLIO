// import herImage from "../images/hero.jpg"
import herImage2 from "../images/hero2.jpg"
import shukri from "../images/shukri.jpg"
import shukri2 from "../images/shukri2.jpg"
const Hero = () => {
    return (
        <div className=" mt-7 grid place-items-center mr-4 p-3 md:p-0">
          <img src={shukri2} alt=""  className=" border-slate-600 border-8 items-center  h-40 w-40 md:h-48 md:w-48 rounded-full"/>
          <article className=" text-white w-full md:w-2/3  p-5  mb-3 md:prose prose-xl">
             <p className="md:text-center  text-white">  Hello, i'm <span className=" text-teal-500 text-2xl mb-3 font-bold">Abdishukri Mohamed</span > </p>
             <p className="text-gray-300 text-xl">
                a aspiring full-stack software developer from Nairobi, Kenya
                I'm passionate about technology and constantly learning new skills to enhance my abilities. 
               Take a look at my portfolio and let's 
                start a conversation about how I can contribute to your team.
             </p> 
         </article> 
         <div className="flex w-1/2 sm:w-1/4 justify-around  rounded-lg bg-gray-800 border border-gray-700 shadow-lg p-2 cursor-pointer ">
            <a href="https://github.com/abdishukri-105  " target="_blank" className="text-white text-3xl  pt-2">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://twitter.com/AbdishukriMoh18" target="_blank" className="text-white text-3xl pt-2  ">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/abdishukri-mohamed/" target="_blank" className="text-white text-3xl pt-2">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <div className="text-white text-3xl pt-2 ">
             <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            
         </div>
        </div>
      );
}
 
export default Hero;