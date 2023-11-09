import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="yusoph-dev"
        blockSize={12}
        blockMargin={5}
        color="#38f633"
        year="2022"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
