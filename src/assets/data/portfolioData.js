import portfolioImg01 from "../images/amalhero1.png";
import portfolioImg02 from "../images/kuria.png";
import portfolioImg03 from "../images/hanan.png";
import portfolioImg08 from "../images/osam.png";
import portfolioImg09 from "../images/misky.png";
import portfolioImg10 from "../images/albaqarah.png";

const portfolios = [
  {
    id: "05",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Amal Mohamed - website design and dev",
    description:
      "I designed and developed a comprehensive online platform to showcase Amal Mohamed's literary works, advocacy initiatives, and multimedia content. The platform offers a user-friendly experience, allowing visitors to easily navigate and engage with her content",
    technologies: [
      "React",
      "Tailwind css",
      "Next.js",
      "UI/UX Prototyping",
      "JavaScript",
    ],
    siteUrl: "https://amal-moha.vercel.app/",
  },
  {
    id: "01",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Hanan collections",
    description: `Created a comprehensive online platform for Hanan Collections.
      With a mobile-first design and seamless UX, the site empowers her to 
      reach a broader audience. Integrated Paystack ensures smooth payments 
      via cards and M-Pesa, while live Instagram and WhatsApp sections enhance
       customer engagement and interaction.`,
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://hanancollections.com",
  },
  {
    id: "02",
    imgUrl: portfolioImg09,
    category: "Web Design",
    title: "Misky Nur ",
    description: `Designed a comprehensive online platform for Misky Nur Abdullahi,
     a celebrated author, poet, and advocate. This seamless integration 
     of her personal brand, literary works, foundation activities,
     and podcast centralizes her diverse endeavors, empowering her
      to connect with a wider audience.`,
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://miskynur.me",
  },
  {
    id: "03",
    imgUrl: portfolioImg10,
    category: "Web Design",
    title: "Al Baqarah Farm ",
    description:
      "I was entrusted with developing a website for AlBaqarah Farm Limited, a leading supplier of premium fruits renowned for their commitment to quality and sustainable agricultural practices. The website serves as a cornerstone for their digital presence, catering to a global audience and fostering brand recognition in international markets.",
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://albaqarahfarm.com/",
  },
  {
    id: "04",
    imgUrl: portfolioImg08,
    category: "Web Design",
    title: "OSAM Cabinet and Hardware",
    description:
      " I took the initiative to design and develop a website for OSAM Cabinet and Hardware. This project aimed to create a strong online presence that effectively communicates their expertise in crafting and installing high-quality kitchen cabinets and doors.",
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://osam-cabinet.vercel.app/",
  },

  {
    id: "06",
    imgUrl: portfolioImg02,
    category: "web design",
    title: "Kuria Girl Child Development Center",
    description:
      "I developed a website for the Kuria Girl Child Development Centre (KGCDC), enhancing their ability to combat Female Genital Mutilation/Cutting (FGM/C) and child marriages. The site amplifies KGCDC's outreach, advocacy, and fundraising efforts, empowering the organization to better protect and uplift girls and women in their community.",
    technologies: ["React", "Tailwind css", "Rails", "SQLite"],
    siteUrl: "https://kgcdc.vercel.app/",
  },
];

export default portfolios;
