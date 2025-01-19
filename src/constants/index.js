import {
  mobile,
  backend,
  creator,
  web,
  javascript,

  html,
  css,
 
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Graphic Design & Thumbanil",
    icon: web,
  },
  {
    title: "Social Media Post",
    icon: mobile,
  },
  {
    title: "Video editing",
    icon: backend,
  },
  {
    title: "Reels & Post Content",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Animator and Designer",
    company_name: "Maya digital studios",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Applied Maya and Blender to create stunning 3D models and animations for marketing videos, product showcases, and interactive media, enhancing user engagement and visual appeal",
      " Utilized Photoshop and Illustrator to design high-quality graphics, logos, and promotional assets for digital campaigns, ensuring consistency across brand identity.",
    ],
  },
  {
    title: "Animator",
    company_name: "Kraft Creation",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Collaborated with the creative team to develop compelling storylines and visual concepts, translating them into detailed storyboards that served as the blueprint for animations.",
      "Utilized tools such as Blender, Maya, and After Effects to create fluid, high-quality animations, including character movements, visual effects, and motion graphics, ensuring they aligned with the project’s vision and style.",
      "Worked closely with designers, sound engineers, and directors to refine animations, making iterative improvements based on feedback, while maintaining consistency with the overall project goals.",
    ],
  },
  {
    title: "Sr. Animator",
    company_name: "Inventif Studios",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      " Led the animation team in developing and executing the creative direction for the project, ensuring that the visual style, tone, and animation techniques aligned with the overarching brand and project goals. Provided mentorship to junior animators to elevate the overall quality of the animations.",
      "Utilized industry-standard tools such as Blender, Maya, and After Effects to produce complex, high-end animations, including 3D character animation, visual effects, and motion graphics, ensuring consistency and high production value across all project deliverables.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Brand icon studio",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2024",
    points: [
      "Led the video editing process, collaborating with directors and producers to shape the narrative and visual style of the project. Crafted compelling stories through expert editing techniques, ensuring a seamless flow and impactful viewer experience.",
      " Utilized tools like Premiere Pro , Resolve to perform high-level editing, color correction, sound design, and visual effects. Delivered polished, professional-grade video content that adhered to brand guidelines and project requirements.",
      " Managed the final review process, overseeing video optimization for various platforms (e.g., web, social media, broadcast) and ensuring technical specifications were met. Ensured smooth performance, color consistency, and audio clarity, delivering the final project on time and within budget",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
