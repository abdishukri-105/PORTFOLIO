const Contact = () => {
    return ( 
        <div className="bg-white  shadow-lg rounded-lg  ">
         <div className="flex flex-col    px-4 py-3 cursor-pointer ">
            <a href="https://github.com/abdishukri-105  " target="_blank" className="text-black text-4xl mb-3 pt-2">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://twitter.com/AbdishukriMoh18" target="_blank" className="text-black text-4xl mb-3  pt-2  ">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/abdishukri-mohamed/" target="_blank" className="text-black mb-3 text-4xl pt-2">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <div className="text-black text-3xl pt-2  ">
             <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
         </div> 
        </div>
     );
}
 
export default Contact;