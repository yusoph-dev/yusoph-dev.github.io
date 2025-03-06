import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import writtenNumber from 'written-number';


function AboutCard() {
  const yearDifference = (new Date()).getFullYear() - 2017;
  const yearDifferenceInWords = writtenNumber(yearDifference);
  const yearWord = yearDifferenceInWords.charAt(0).toUpperCase() + yearDifferenceInWords.slice(1);

  //uppercase first letter
  
  const c = ["OrangeApps Inc", "Philippine Chamber of Commerce and Industry", "Hiraya MNL", "GoodStrings Inc", "Umbra Digital Company"];
  const cl = c.length - 1;
  const companiesList = c.map((c, i) => {
    return <span key={i} className="Purple"> {c}{(i === cl ? '' : ',')}</span>;   
  });

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yusoph Suma</span> from{" "}
            <span className="purple">Manila, Philippines.</span>
            <br />
            <br /> I am a <span className="purple">Full-Stack Developer & Tech Speaker</span> 
            {" "}with {yearDifference} years of experience. I specialize in{" "}
            <span className="purple">modern web development, cloud computing, and scalable software solutions.</span> 
            {" "}Over the past <span className="purple">{yearWord} years</span>, I've had the opportunity 
            to work at {companiesList}, gaining valuable experience in building robust applications.
            <br />
            <br />
            I have successfully developed and optimized high-traffic{" "}
            <span className="purple">e-commerce platforms, e-learning systems, and blockchain-based applications.</span> 
            {" "}My expertise includes architecting scalable APIs, integrating AI-driven features, and collaborating with 
            cross-functional teams to deliver high-quality solutions.  
            <br />
            <br />
            Beyond coding, I am also passionate about{" "}
            <span className="purple">sharing knowledge through tech talks and mentoring developers.</span>  
            {" "}Some of my recent speaking engagements include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> **Git: More Than Just a Version Control** - Pateros Technological College (Nov 11, 2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> **Leveraging Cloud Technologies for Modern Software Development** - Aura Future Systems Analyst, Pampanga (Oct 14, 2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> **Cyber Security & Data Privacy** - Technological University of the Philippines, Taguig (Sep 12, 2024)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            I love web development because of the creative aspect of designing{" "}
            <span className="purple">user-friendly interfaces</span> and solving complex coding challenges. 
            I'm always eager to stay ahead with the latest web technologies and trends.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding is the art of crafting digital landscapes, where each line of code is a brushstroke, and the canvas is a world of endless possibilities."{" "}
          </p>
          {/* <footer className="blockquote-footer">Yusoph</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
