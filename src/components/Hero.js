// import herImage from "../images/hero.jpg"
import herImage2 from "../images/hero2.jpg"

const Hero = () => {
    return (
        <div className=" mt-8 grid place-items-center mr-4">
          <img src={herImage2} alt=""  className=" border-slate-500 border-8 items-center h-40 w-40 rounded-full"/>
          <article className=" text-white w-2/3 text-center p-5 mt-2 mb-3">Hello, i'm <span className=" text-teal-500 font-bold">Abdishukri Mohamed</span > , a aspiring full-stack software developer from Nairobi, Kenya <br />
          I'm passionate about technology and constantly learning new skills to enhance my abilities.    I have a solid foundation in <span className=" font-bold"> HTML,CSS,JAVASCRIPT,REACT,BOOTSTRAP,TAILWIND currently learning Ruby</span> and am eager to apply my knowledge to real-world projects.Take a look at my portfolio and let's start a conversation about how I can contribute to your team.</article>
         
        </div>
      );
}
 
export default Hero;