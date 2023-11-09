import React from 'react';
import { Container, Row, Col} from "react-bootstrap"; 
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Helper function to generate project data
function generateProjectData(projectNumber, totalImages, title, ghLink, demoLink, headTitle, longDescription) {
  const images = [];
  const thumbnails = [];

  for (let i = 1; i <= totalImages; i++) {
    images.push(require(`../../Assets/Projects/${projectNumber}_${title}/${i}.png`));
    thumbnails.push(require(`../../Assets/Projects/${projectNumber}_${title}/${i}_tn.jpg`));
  }

  const projectImages = images.map((original, index) => ({
    original,
    thumbnail: thumbnails[index],
  }));

  return {
    imgPath: images[0],
    title,
    headTitle,
    description: longDescription,
    ghLink,
    demoLink,
    images: projectImages,
  };
}

const projects = [
  generateProjectData(1, 14, 
                      "snkrhud", 
                      false, 
                      "https://www.snkrhud.com/#/", 
                      "SNKRHUD Landing", 
                      "The SNKRHUD.com Landing Page introduces Earth-326, a post-apocalyptic world where sneakers reign as currency in an NFT-centric playground. Crafted with VueJS, Less, and Scss, this immersive site was a collaborative effort with the Hiraya MNL development team."
                      ),
  generateProjectData(2, 27, 
                      "toqa", 
                      false, 
                      "https://toqa.tv/", 
                      "TOQA", 
                      "I collaborated with the TOQA Team, designer Mele Hamasaki, and Hiraya Design Studio in preparation for the 2022 Honolulu Triennial. Our work included implementing, designing, and constructing a bespoke website using Shopify. We also custom-built the theme using Liquid, Figma, and XD, while enhancing the e-commerce functionality."
                      ),
  generateProjectData(3, 14, 
                      "mothercdb", 
                      false, 
                      "https://themother.life/", 
                      "Mother CBD Oil", 
                      "I led the implementation of www.mothercbdoils.com, collaborating with designer Mele Hamasaki and the team. We created an e-commerce site aligning with the brand's serene aesthetic, emphasizing usability. The site was built on Shopify, with a custom Liquid and Figma theme to enhance the brand's identity."
                      ),
  generateProjectData(4, 9, 
                      "flowscorenft", 
                      false, 
                      "https://www.flowscorenft.com/", 
                      "FlowScore NFT", 
                      "Flowscore NFT, a platform for ranking the rarity of web3 collectibles, seamlessly integrates with blockchain wallets like Metamask, Blocto, and Phantom. Developed with VueJS, onflow/fcl, and vue3-apexcharts, it benefited from the expertise of the HIRAYA MNL development team."
                      )
                      ,
  generateProjectData(16, 8, 
                      "iccs", 
                      false, 
                      'https://iccs.edu.ph/', 
                      "ICCS", 
                      "My assignment involved the creation of a WordPress landing page using Elementor for the Immaculate Conception Cathedral School. This page serves as a dynamic platform, highlighting the institution's core values, disseminating news and articles, providing insights into the admission process, portraying student life, and offering comprehensive FAQs."
                      ),
  generateProjectData(5, 17, 
                      "alpps", 
                      false, 
                      "https://develop.alpps-landing.pages.dev/", 
                      "ALPPS", 
                      "I created a sophisticated landing page for the Association of Las Piñas Private Schools (ALPPS) using VueJS. This platform showcases the pinnacle of educational excellence, reflecting our commitment to innovation and user experience."
                      ),
  generateProjectData(20, 12, 
                      "snps", 
                      false,
                      'http://snpsdoces.edu.ph/', 
                      "SNPS", 
                      "I contributed to developing an interactive WordPress landing page, utilizing the Elementor Plugin, for Sto. Niño Parochial School (SNPS). This dynamic platform effectively guides prospective students through admissions, offers a parent portal, disseminates news and articles, highlights student life, a FAQ section, and showcases the school's values."
                      ),
  generateProjectData(6, 9, 
                      "sitandrelax", 
                      false, 
                      false, 
                      "Sit & Relax", 
                      "I developed a robust web application tailored for administrative use at Sit&Relax. This multifaceted tool empowers administrators to efficiently oversee massage chairs, branches, users (both branch owners and staff), access analytics, and monitor sales. The application leverages VueJS, Bootstrap, Laravel, and MySQL, ensuring optimal functionality."
                      ),
  generateProjectData(9, 30, 
                      "omniclient", 
                      false, false, 
                      "OMNI Staff Client", 
                      "The OMNI Staff Client platform, tailored for hospitals and clinics, streamlines the hiring process for prospective candidates, ensuring efficient placements. It offers comprehensive candidate scheduling availability, enhancing operational transparency. Collaborating with HIRAYA MNL developers, we employed VueJS, Node, and Firebase to develop this essential tool."
                      ),
  generateProjectData(7, 26, 
                      "omniadmin", 
                      false, 
                      false, 
                      "OMNI Staff Admin",
                      "I played a pivotal role in the development of an administrative tool for OMNI Staff, facilitating efficient management of nursing staff schedules and hospital staffing needs. This versatile tool, crafted with VueJS, Node, and Firebase, optimizes operations for healthcare professionals."
                      ),
  generateProjectData(8, 29, 
                      "omnicandidate", 
                      false, false, 
                      "OMNI Staff Candidate", 
                      "I collaborated on the enhancement of a web application at OMNI Staff Candidate Platform, with a focus on improving aspects for nurse candidates and hospitals. This work aimed to streamline nurse collection, promote interdepartmental collaboration, and expedite data-driven hiring decisions. The project involved collaboration with HIRAYA MNL developers and utilized VueJS, Node, and Firebase."
                      ),
  generateProjectData(10, 6, 
                      "encoretrade", 
                      false, false, 
                      "ENCORE TRADE", 
                      "I crafted this landing page using Wordpress, leveraging the Elementor plugin. It prominently displays Encore Trade's exemplary work in customizing trucks and cars for emergency services, portable clinics, and ambulances, showcasing our commitment to specialized vehicle solutions."
                      ),
  generateProjectData(11, 9, 
                      "whitestrings", 
                      false, 
                      "whitestrings.io", 
                      "WhiteStrings", 
                      "This landing page for Whitestrings is a gateway to their comprehensive school management system and associated mobile app. It serves as an avenue for inquiries, offering a seamless demo request experience. The page was skillfully developed using VueJS and Node, reflecting the company's commitment to innovative education solutions."
                      ),
  generateProjectData(12, 5, 
                      "goodstrings", 
                      false, 
                      "goodstrings.io", 
                      "GoodStrings", 
                      "Goodstrings granted me the opportunity to design their captivating landing page, where they showcase their proficiency in education web applications, business software development, and rigorous quality assurance and testing services. Constructed using VueJS and Node, the page seamlessly utilizes the Postmark API for streamlined email inquiries, demonstrating Goodstrings' dedication to excellence and innovation."
                      ),
  generateProjectData(13, 15, 
                      "okipo", 
                      false, false, 
                      "OKIPO", 
                      "I took the lead in developing a captivating landing page and e-commerce platform for Okipo, dedicated to showcasing exquisite art furniture. The site seamlessly blends VueJS, Shopify API, and Node to create a dynamic and visually engaging platform that emphasizes Okipo's dedication to artful design and quality."
                      ),
  generateProjectData(14, 16, 
                      "oa_lmsv2", 
                      false, false, 
                      "OrangeApps LMS v2", 
                      "My assigned role encompassed the development of crucial modules within the OrangeApps Learning Management System. This entailed crafting components for student registration, grade management, file handling, cashiering tools, and all facets of an LMS. The project leveraged VueJS, Laravel for backend operations, and MySQL, with select technologies sourced from Google Cloud."
                      ),
  generateProjectData(15, 14, 
                      "oa_sisv1", 
                      false, false, 
                      "OrangeApps SIS", 
                      "The OrangeApps Student Information System is tailored for elementary and high schools, offering comprehensive features encompassing account management for students, teachers, and staff, enrollment dashboards, arrears tracking, schedule management, file handling, grade management, HR evaluation, and cashier tools. Developed using the PHP CodeIgniter framework, this project seamlessly integrates resources from Azure Cloud technologies. As the pioneering developer, I collaborated closely with OrangeApps developers to bring this system to fruition."
                      ),
  generateProjectData(17, 6, 
                      "hfps", 
                      false, false, 
                      "HFPS", 
                      "I played a key role in developing a dynamic WordPress landing page using Elementor for Holy Family Parochial School. This interactive platform effectively showcases the school's core values, distributes news and articles, guides prospective students through the admissions process, provides a glimpse into student life, and offers a comprehensive FAQ section."
                      ),
  generateProjectData(18, 5, 
                      "olhps", 
                      false, false, 
                      "OLHPS", 
                      "I played a vital part in creating an engaging WordPress landing page for Our Lady Of Perpetual Help School (OLHPS). This dynamic platform effectively presents the school's values, shares news and articles, assists prospective students with admissions, provides a parent portal, showcases student life, and includes a FAQ section."
                      ),
  generateProjectData(19, 4, 
                      "sjcs", 
                      false, false, 
                      "SJCS", 
                      "I played a crucial role in developing an interactive WordPress landing page also by using Elementor Plugin for Our Saint Joseph Catholic School (SJCS). This vibrant platform effectively showcases the school's values, disseminates news and articles, guides prospective students through admissions, offers a parent portal, highlights student life, and includes a comprehensive FAQ section."
                      ),
  generateProjectData(21, 7, 
                      "mihca", 
                      false, false, 
                      "MIHCA", 
                      "I was involved in the development of a web application for Magsaysay Center for Hospitality and Culinary Arts (MIHCA). This application caters to students, employees, and instructors, offering features such as a comprehensive dashboard, account management, school information setup, document management, online payment handling by cashiers, class and school newsfeeds, online enrollment, and course management. The web app was built using CodeIgniter, Bootstrap, jQuery, and MySQL as the database, and it was hosted on Azure Cloud."
                      ),
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects on which I've worked for the past 6 years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                showButton={false}
                title={project.headTitle}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                images={project.images}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
