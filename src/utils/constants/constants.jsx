import understandVideo from "../../assets/videos/1.mp4";
import exploreVideo from "../../assets/videos/2.mp4";
import materializeVideo from "../../assets/videos/3.mp4";
import feedbackVideo from "../../assets/videos/4.mp4";
import aerologix_logo from "../../assets/images/Aerologix_logo.svg";
import kabadiwala_logo from "../../assets/images/Kabadiwala_logo.svg";
import pushpkar_studios_logo from "../../assets/images/PushpkarStudio_logo.svg";

const designProcessList = [
  {
    title: "UNDERSTAND",
    step: 1,
    content: `I always start off by asking questions like "what," "why," and "whom" as a key part of my process, 
      whether I'm working with a team or flying solo. Asking lots of questions upfront helps me get clear on what 
      I need to do and what my goals are, so I can sort out any uncertainties and get things done. It's all about staying 
      curious and asking questions early on!`,
    video: understandVideo,
  },
  {
    title: "EXPLORE",
    step: 2,
    content: `Once I've asked my questions and figured out my goals, I start hunting for different solutions and ideas.
       I like to brainstorm and think outside the box to come up with new possibilities. Then, I compare all the options and 
       choose the best one that fits the bill. It's all about exploring, being creative, and finding the best way forward!`,
    video: exploreVideo,
  },
  {
    title: "MATERIALIZE",
    step: 3,
    content: `Once I have a clear understanding of what needs to be created, I will then establish a 
      set of rules and guidelines within a framework to streamline my work, ensuring efficiency and consistency. 
      This phase is where ideas will come to life, taking shape and closely resembling the final product.`,
    video: materializeVideo,
  },
  {
    title: "Explore",
    step: 4,
    content: `Feedback is an integral part of the design process as it provides
      invaluable insights. By testing the final designs with actual users,
      we can identify areas that can be improved. Changes are necessary in
      the development process, and although it may seem frustrating,
      feedback helps to identify mistakes and guides us towards achieving
      better results.`,
    video: feedbackVideo,
  },
];

// ############################################### ABOUT SECTION (EXPERIENCES) ##################################################

const experiences = [
  {
    company: "AEROLOGIX",
    companyLogo: aerologix_logo,
    role: "PRODUCT DESIGNER",
    date: "May 2023 - Present",
    projects: ["AerologixFly", "Aerologix App", "AerologixMaps"],
    description: `Energetic and outcome-oriented Product Designer with a successful history at Aerologix,
                  championing user-centric design and innovation across varied projects. Notable achievements
                  encompass spearheading the development of AerologixMaps, an innovative SaaS product.
                  Guiding the design process, I crafted an intuitive user interface empowering users to create
                  GIS maps and leverage advanced photogrammetry tools, including point clouds and contour maps.`,
  },
  {
    company: "THE KABADIWALA",
    companyLogo: kabadiwala_logo,
    role: "UI/UX DESIGNER",
    date: "Aug 2021 - Aug 2022",
    projects: ["TKW Websites", "Cypher Design", "Centre", "EPR"],
    description: `Product Designer at The Kabadiwala, contributing to a technology-driven company
                  specializing in Smart Waste Management using a SaaS model. Conducted comprehensive research on operational
                  challenges in Material Recovery Facilities (MRF) and warehouses, identifying market needs in waste management.
                   Led ideation sessions, evaluated solutions, and collaborated with the tech team to validate and implement
                  efficient solutions. Established the in-house design system, Cypher Design, and crafted user-friendly web
                  pages and applications adhering to WCAG 2 standards. Created working prototypes, ensuring seamless
                  collaboration with developers for accurate implementation. Provided creative oversight for the marketing
                  team and fulfilled diverse design requirements.`,
  },
  {
    company: "PUSHPKAR STUDIOS",
    companyLogo: pushpkar_studios_logo,
    role: "EDITOR & DESIGNER",
    date: "Aug 2021 - Aug 2022",
    projects: ["TKW Websites", "Cypher Design", "Centre", "EPR"],
    description: `Product Designer at The Kabadiwala, contributing to a technology-driven company
                    specializing in Smart Waste Management using a SaaS model. Conducted comprehensive research on operational
                    challenges in Material Recovery Facilities (MRF) and warehouses, identifying market needs in waste management.
                     Led ideation sessions, evaluated solutions, and collaborated with the tech team to validate and implement
                    efficient solutions. Established the in-house design system, Cypher Design, and crafted user-friendly web
                    pages and applications adhering to WCAG 2 standards. Created working prototypes, ensuring seamless
                    collaboration with developers for accurate implementation. Provided creative oversight for the marketing
                    team and fulfilled diverse design requirements.`,
  },
];

// ############################################### HOME PAGE (PROJECT SECTION) ##################################################
const projects = [
  {
    title: "AerologixMaps",
    type: "UI/UX design",
    association: "Aerologix, Full-time Employee",
    duration: "3 Months",
    year: "2023",
    description:
      "Aerologix is a Sydney-based drone start-up that provides a marketplace for clients to locate their local drone pilot to complete aerial imagery projects. The company uses a patented algorithm and geolocation to match clients with skilled and qualified drone pilots. Collaborating seamlessly with cross-functional teams, I crafted intuitive user interfaces and user experiences, ensuring alignment with business goals. My role extended to prototyping, usability testing, and guiding development teams for seamless implementation. Additionally, I played a key role in refining the design process, contributing to enhanced efficiency and product excellence.",
  },
  {
    title: "AerologixMaps",
    type: "UI/UX design",
    association: "Aerologix, Full-time Employee",
    duration: "3 Months",
    year: "2023",
    description:
      "Aerologix is a Sydney-based drone start-up that provides a marketplace for clients to locate their local drone pilot to complete aerial imagery projects. The company uses a patented algorithm and geolocation to match clients with skilled and qualified drone pilots. Collaborating seamlessly with cross-functional teams, I crafted intuitive user interfaces and user experiences, ensuring alignment with business goals. My role extended to prototyping, usability testing, and guiding development teams for seamless implementation. Additionally, I played a key role in refining the design process, contributing to enhanced efficiency and product excellence.",
  },
  {
    title: "AerologixMaps",
    type: "UI/UX design",
    association: "Aerologix, Full-time Employee",
    duration: "3 Months",
    year: "2023",
    description:
      "Aerologix is a Sydney-based drone start-up that provides a marketplace for clients to locate their local drone pilot to complete aerial imagery projects. The company uses a patented algorithm and geolocation to match clients with skilled and qualified drone pilots. Collaborating seamlessly with cross-functional teams, I crafted intuitive user interfaces and user experiences, ensuring alignment with business goals. My role extended to prototyping, usability testing, and guiding development teams for seamless implementation. Additionally, I played a key role in refining the design process, contributing to enhanced efficiency and product excellence.",
  },
];

export { designProcessList, experiences, projects };
