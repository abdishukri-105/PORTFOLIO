const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-20 border-gray-800 border-t-2 md:border-b-0 md:border-r-0 md:border-l-0">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="text-lg mb-4">
          &copy; 2023: <span className="font-bold">Abdishukri Mohamed</span>
        </div>

        <div className="text-white font-bold mb-4">
          <span>Tel: +2547 22 52 13 14</span>
        </div>

        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://github.com/abdishukri-105"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 rounded-full hover:cursor text-2xl"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://twitter.com/AbdishukriMoh18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 rounded-full hover:cursor text-2xl"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/abdishukri-mohamed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 rounded-full hover:cursor text-2xl"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
