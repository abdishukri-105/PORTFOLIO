// import herImage from "../images/hero.jpg"
import herImage2 from "../images/hero2.jpg"

const Hero = () => {
    return (
        <div className=" mt-7 grid place-items-center mr-4">
          <img src={herImage2} alt=""  className=" border-slate-600 border-8 items-center h-40 w-40 rounded-full"/>
          <article className=" text-white w-2/3  p-5  mb-3">
             <p className="text-center p-3 text-2xl">  Hello, i'm <span className=" text-teal-500 text-2xl mb-3 font-bold">Abdishukri Mohamed</span > </p>
             <p className="text-gray-300">
                a aspiring full-stack software developer from Nairobi, Kenya .
                I'm passionate about technology and constantly learning new skills to enhance my abilities. 
                I have a solid foundation in  HTML,CSS,JAVASCRIPT,REACT,BOOTSTRAP,TAILWIND and currently learning Ruby.
                 am eager to apply my knowledge to real-world projects.Take a look at my portfolio and let's 
                start a conversation about how I can contribute to your team.
             </p>
         </article>
        </div>
      );
}
 
export default Hero;