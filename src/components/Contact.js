const Contact = () => {
    return ( 
        <div className="bg-white dark:bg-slate-700 shadow-lg rounded-lg  ">
         <div className="flex flex-col    px-2 py-1 cursor-pointer ">
            <a href="https://github.com/abdishukri-105  " target="_blank" className="text-black dark:text-gray p-2 rounded-lg hover:bg-purple-100 text-4xl mb-3 pt-2">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://twitter.com/AbdishukriMoh18" target="_blank" className="text-black p-2 rounded-lg hover:bg-purple-100 text-4xl mb-3  pt-2  ">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/abdishukri-mohamed/" target="_blank" className="text-black p-2 rounded-lg hover:bg-purple-100 mb-3 text-4xl pt-2">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <div className="text-black text-3xl  p-2 rounded-lg hover:bg-purple-100 ">
             <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
         </div> 
        </div>
     );
}
 
export default Contact;