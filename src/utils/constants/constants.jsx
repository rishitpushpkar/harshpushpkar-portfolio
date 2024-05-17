// Design Process Resources
import understandVideo from "../../assets/videos/1.mp4";
import exploreVideo from "../../assets/videos/2.mp4";
import materializeVideo from "../../assets/videos/3.mp4";
import feedbackVideo from "../../assets/videos/4.mp4";

// Experience Resources
import aerologix_logo from "../../assets/images/Aerologix_logo.svg";
import kabadiwala_logo from "../../assets/images/Kabadiwala_logo.svg";
import pushpkar_studios_logo from "../../assets/images/PushpkarStudio_logo.svg";

// Project Resources
import projectVideo1 from "../../assets/videos/Amaps.mp4";
import projectVideo2 from "../../assets/videos/CypherDesign.mp4";
import projectVideo3 from "../../assets/videos/Aicare.mp4";
import projectVideo4 from "../../assets/videos/Centre.mp4";
import projectVideo5 from "../../assets/videos/EPR.mp4";
import projectVideo6 from "../../assets/videos/Legacy.mp4";
import projectVideo7 from "../../assets/videos/MSS.mp4";
import projectVideo8 from "../../assets/videos/Nuetek.mp4";
import projectVideo9 from "../../assets/videos/Tkw.mp4";
import projectVideo10 from "../../assets/videos/Apron.mp4";

// ############################################### DESIGN PROCESS SECTION ##################################################
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
    projects: [
      "Wedding Highlights",
      "Pre-Wedding",
      "Wedding Invitations",
      "Promotional Videos",
      "Commercial Highlights",
      "YouTube Videos",
    ],
    description: `Dedicated contributor to Pushpkar Studio, a family-owned business established in 1996, specializing in videography, photography, and editing services. With over 7 years of experience, I played a vital role as a Video Editor, Content Creator, and Designer.

    Edited diverse projects, including Wedding Films, Pre-wedding Videos, Wedding Invitations, Highlights, Commercial Ads, Promos, Institutional Videos, YouTube content, and Event Slideshows.
    Collaborated closely with clients to understand their vision and deliver tailored, high-quality productions.
    Stayed updated on industry trends, incorporating new techniques and technologies into editing processes.`,
  },
];

// ############################################### HOME PAGE (PROJECT SECTION) ##################################################
const projects = [
  {
    title: "AerologixMaps",
    type: "UI/UX design | Web | SaaS | B2B",
    association: "Aerologix, Full-time Employee",
    duration: "3 Months",
    year: "2023",
    description:
      "Aerologix is a Sydney-based drone start-up that provides a marketplace for clients to locate their local drone pilot to complete aerial imagery projects. The company uses a patented algorithm and geolocation to match clients with skilled and qualified drone pilots. Collaborating seamlessly with cross-functional teams, I crafted intuitive user interfaces and user experiences, ensuring alignment with business goals. My role extended to prototyping, usability testing, and guiding development teams for seamless implementation. Additionally, I played a key role in refining the design process, contributing to enhanced efficiency and product excellence.",
    video: projectVideo1,
    buttonLabel: "See Project",
    btnLink: "https://www.aerologixmaps.com/",
  },
  {
    title: "Cypher Design",
    type: "UI/UX design | Mobile & Web | SaaS",
    association: "The Kabadiwala, Full-time",
    duration: "2 Months",
    year: "2021",
    description:
      "Cypher, a design system meticulously crafted for Scrappr, serves as a catalyst for creating user-friendly, straightforward, scalable, responsive, and consistently designed user interfaces. With the integration of pre-built components, the arduous task of reconstructing fundamental UI elements is substantially diminished, paving the way for accelerated product development. This efficiency allows our team to redirect their focus towards refining user experiences and tackling complex problem-solving, ultimately lifting the overall value of the product. ",
    video: projectVideo2,
    buttonLabel: "See Project",
    btnLink: "https://cypher.gozero.ooo/",
  },
  {
    title: "Apron",
    type: "Product Design | Mobile",
    collaboration: "Ronak Jain (Brand & Visual Designer)",
    duration: "2 Months",
    year: "2024",
    description:
      "Apron connects travelers and individuals exploring new destinations with a temporary solution for their culinary needs. For individuals far from home, it provides access to kitchens for rent, enabling them to cook meals aligned with their dietary preferences and tastes. On the other side, homeowners can monetize their kitchen spaces by offering them for temporary rentals, creating a seamless and mutually beneficial arrangement. ",
    video: projectVideo10,
    buttonLabel: "See Case Study",
    btnLink:
      "https://www.figma.com/proto/MossOx6VgYNV1apyOJqaAd/Apron---Product-Design-%26-UX-Case-Study?type=design&node-id=474-7737&t=0BlcLeW52It18sy0-0&scaling=contain&page-id=474%3A6366&starting-point-node-id=474%3A6367",
  },
];

// ############################################### ALL PROJECTS ##################################################

const allProjects = [
  ...projects,
  {
    title: "The Kabadiwala",
    type: "UI/UX design | Mobile & Web | SaaS | B2C",
    association: "The Kabadiwala, Full-time",
    year: "2023",
    description:
      "The Kabadiwala, developed by ASAR Green Kabadi Pvt. Ltd., embodies innovation in waste management through a sophisticated SaaS (Software as a Service) platform. As a key member of the team, I spearheaded the creation and design of web pages while crafting compelling visual content including images, videos, graphics, and animations. My role extended beyond mere design; I fostered seamless collaboration across departments, ensuring our output consistently met the highest standards of quality and coherence.",
    video: projectVideo9,
    buttonLabel: "Visit",
    btnLink: "https://www.thekabadiwala.com/",
  },
  {
    title: "Zero Centre",
    type: "Product/UX/UI Design | Mobile | B2B",
    duration: "3 Months",
    year: "2022",
    description:
      "Zero Centre is the ultimate app for effortless scrap inventory management. With its intuitive interface, Zero Centre empowers you to oversee multiple centers, manage personnel and roles, handle transactions, streamline logistics, and generate seamless billing and invoicing. ",
    video: projectVideo4,
    buttonLabel: "See Project",
    btnLink:
      "https://play.google.com/store/apps/details?id=ooo.gozero.centre&hl=en_IN&gl=US&pli=1",
  },
  {
    title: "Zero EPR",
    type: "UI/UX Design | Web (SaaS)",
    duration: "3 Months",
    year: "2021",
    description:
      "Zero EPR is a SaaS platform providing comprehensive EPR compliance management solutions. Specializing in handling various mandatory waste materials, Zero EPR facilitates seamless end-to-end management processes. Their services streamline waste management, catalyzing economic growth while fostering the transition towards a circular economy.",
    video: projectVideo5,
    buttonLabel: "See Project",
    btnLink: "https://www.scrapr.app/epr-calculator",
  },
  {
    title: "Mathur Sweets & Snacks",
    type: "UI/UX design | Mobile",
    duration: "1 Week",
    year: "2020",
    description:
      "As a part of my UX Design course (From Google), this project helped me understand the UX design fundamentals and key concepts. Mathur Sweets and Snacks (MSS) stands as a prominent fast-food chain in city, boasting five strategically positioned branches in the bustling commercial hubs of the city. With options for in-store dining and convenient door-to-door delivery via phone orders, MSS ensures that its tantalizing offerings are accessible to all. my goal was to design an app for MSS that allows users to book orders and track them live easily.",
    video: projectVideo7,
    buttonLabel: "See Case Study",
    btnLink:
      "https://drive.google.com/file/d/1ueZpEMvWGOEZoyuZ1-l2Zb6zfA317v3I/view",
  },
  {
    title: "Legacy Sport Academy",
    type: "Logo, Brand, Graphic Design",
    duration: "2 Months",
    year: "2024",
    description:
      "Legacy Sports Club is a premier sports academy dedicated to nurturing talent and fostering a culture of excellence in sports. Situated amidst lush greenery, our state-of-the-art facility boasts a range of world-class amenities, including a futsal ground for fast-paced action, a cricket school for honing batting and bowling skills, and a football ground where dreams take flight with every kick. My role was to design their logo and branding and other designs like banners and social media posts.",
    video: projectVideo6,
    buttonLabel: "Visit",
    btnLink: "https://www.instagram.com/legacy_sports_club/",
  },
  {
    title: "AICARE",
    type: "UI/UX Research & Design | Web",
    duration: "1 Week",
    year: "2023",
    description:
      "Aicare is a Healthcare Analytics software powered by Artificial Intelligence. This software helps healthcare professionals and stakeholders to feed, clean, and analyze healthcare data to get necessary actionable insights. ",
    video: projectVideo3,
    buttonLabel: "See Research Study",
    btnLink:
      "https://harshpushpkar.notion.site/AICARE-3c1b6c92d19f4e1eb7457ac0141337b5",
  },
  {
    title: "Nuetek",
    type: "UI/UX Design | Mobile",
    duration: "1 Week",
    year: "2020",
    description:
      "Nuetek Electronics is a leading electronics manufacturer, renowned for its diverse range of products including smartphones, laptops, televisions, and music systems. With departments covering production, design, finance, distribution, and corporate management, Nuetek operates seamlessly across multiple markets. Recognizing their environmental responsibility, the company has intensified its focus on sustainability, embracing principles of the circular economy, and enhancing corporate social responsibility (CSR) policies. Adhering to governmental regulations such as Extended Producer Responsibility (EPR), Nuetek maintains stringent operational standards to mitigate environmental impact.",
    video: projectVideo8,
    buttonLabel: "See Case Study",
    btnLink:
      "https://harshpushpkar.notion.site/Nuetek-bcc2c58c8c5245b4839680a2bb5cfc1b",
  },
];

export { designProcessList, experiences, projects, allProjects };
