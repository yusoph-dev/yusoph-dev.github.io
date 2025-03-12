import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import Flag from 'react-world-flags';
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    const token = process.env.REACT_APP_IPINFO_TOKEN;
    fetch(`https://ipinfo.io/json?token=${token}`)
      .then(response => response.json())
      .then(async data => {
        const logEntry = {
          ip: data.ip,
          date: new Date().toISOString(),
          city: data.city,
          region: data.region,
          country: data.country,
          countryCode: data.country.toUpperCase()
        };
        localStorage.setItem('visitorLog', JSON.stringify(logEntry));
        setCountryCode(logEntry.countryCode);

        // Store log entry in Firestore
        try {
          await addDoc(collection(db, "visitorLogs"), logEntry);
        } catch (e) {
          console.error("Error adding log entry to Firestore: ", e);
        }

        // Fetch visitor count from Firestore
        try {
          const querySnapshot = await getDocs(collection(db, "visitorLogs"));
          setVisitorCount(querySnapshot.size);
        } catch (e) {
          console.error("Error fetching visitor count from Firestore: ", e);
        }
      })
      .catch(error => console.error('Error fetching visitor info:', error));
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://yusoph.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link>
                <FaUsers style={{ marginBottom: "2px" }} /> {visitorCount} <Flag code={countryCode} style={{ width: "20px", height: "15px", marginBottom: "2px" }} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/yusoph-dev/yusoph-dev.github.io"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;