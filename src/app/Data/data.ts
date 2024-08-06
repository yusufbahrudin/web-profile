import * as Icon from "react-feather";

interface Expertise {
  title: string;
  Icon: React.ComponentType;
}

interface Service {
  title: string;
  desc: string;
  Icon: React.ComponentType;
}

interface Project {
  image: string;
  title: string;
  subTitle: string;
}

interface Blog {
  image: string;
  title: string;
  desc: string;
}

interface Review {
  name: string;
  designation: string;
  image: string;
  desc: string;
}

export const expertiseData: Expertise[] = [
  {
    title: "Developing",
    Icon: Icon.Monitor,
  },
  {
    title: "Mac OS",
    Icon: Icon.StopCircle,
  },
  {
    title: "Cinema",
    Icon: Icon.Video,
  },
  {
    title: "Coffee",
    Icon: Icon.Coffee,
  },
];

export const servicesData: Service[] = [
  {
    title: "UX / UI Design",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Airplay,
  },
  {
    title: "Ios App Designer",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Aperture,
  },
  {
    title: "Photography",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Camera,
  },
  {
    title: "Graphic Designer",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Compass,
  },
  {
    title: "Web Security",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Settings,
  },
  {
    title: "Web Security",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
    Icon: Icon.Watch,
  },
];

export const project: Project[] = [
  {
    image: "/images/works/1.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/2.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/3.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/4.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/5.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/6.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/7.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
  {
    image: "/images/works/8.jpg",
    title: "Fronter Theme",
    subTitle: "UI / UX Design",
  },
];

export const blogData: Blog[] = [
  {
    image: "/images/blog/01_giglink.jpg",
    title: "Giglink: Tailwind CSS NFT Marketplace Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_techwind.jpg",
    title: "Techwind: Tailwind CSS Multipurpose Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_upwind.jpg",
    title: "Upwind: Tailwind CSS Landing Page Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_upwind.jpg",
    title: "Upwind: Tailwind CSS Landing Page Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_giglink.jpg",
    title: "Giglink: Tailwind CSS NFT Marketplace Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_techwind.jpg",
    title: "Techwind: Tailwind CSS Multipurpose Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/images/blog/01_upwind.jpg",
    title: "Upwind: Tailwind CSS Landing Page Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
  {
    image: "/",
    title: "Upwind: Tailwind CSS Landing Page Template",
    desc: "The phrasal sequence of the is now so that many campaign and benefit",
  },
];

export const review: Review[] = [
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
  {
    name: "Thomas Israel",
    designation: "Manager",
    image: "/images/client/01.jpg",
    desc: "Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
  },
];
