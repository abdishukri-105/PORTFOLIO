// import herImage from "../images/hero.jpg"
import herImage2 from "../images/hero2.jpg"

const Hero = () => {
    return (
        <div className=" mt-12 grid place-items-center shadow-lg mr-4">
          <img src={herImage2} alt=""  className=" border-slate-500 border-8 items-center h-40 w-40 rounded-full"/>
          <p className=" leading-9  text-white text-xl p-5 text-center mt-2 mb-3">Hello, i'm <span class=" text-teal-500">Abdishukri</span> <br />
            a fullStack software developer  from Nairobi, Kenya </p>
         
        </div>
      );
}
 
export default Hero;