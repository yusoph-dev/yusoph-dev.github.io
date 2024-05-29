import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiWordpress,
  DiLaravel,
  DiSass,
  DiJqueryLogo,
  DiCodeigniter,
  DiBootstrap,
  // DiDocker,
} from "react-icons/di";
import {
  SiVuedotjs,
  SiPrestashop,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiShopify,
  SiDocker,
  SiAdonisjs
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import Tilt from "react-parallax-tilt";

function renderTooltip(props, text) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );
}
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* navigeate on specific link when clicked tech-icons */}
      <Col xs={4} md={2} className="tech-icons" onClick={()=>window.open=('https://www.docker.com/', '_blank')}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=>{ }}> 
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdonisjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrestashop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
    </Row>
  );
}

export default Techstack;
