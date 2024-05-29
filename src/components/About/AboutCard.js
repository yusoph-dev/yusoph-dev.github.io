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
            Hi Everyone, I am <span className="purple">Yusoph Suma </span>
            from <span className="purple"> Manila, Philippines.</span>
            <br />
            <br /> I am a seasoned web developer with {yearDifference} years of experience. I specialize in some <span className="purple">full-stack development</span> related projects. Over the past <span className="purple">{yearWord} years</span>, I've had the privilege of working with four different companies, each offering unique challenges and opportunities for growth. I've had the opportunity to work at {companiesList} and have gained a wealth of experience in the process.
            <br />
            <br />
            During this time, I've successfully built and launched several high-traffic <span className="purple">e-commerce, e-learning websites</span>, some <span className="purple">blockchain</span> related development, optimized web applications for performance, collaborated with cross-functional teams to deliver innovative solutions, etc. I'm passionate about web development because I love the creative aspect of designing user-friendly interfaces, I enjoy solving complex coding challenges, I'm always eager to stay up-to-date with the latest web technologies and trends
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
