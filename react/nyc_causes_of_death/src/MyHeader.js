import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function MyHeader() {
  return (
    <Jumbotron>
      <h1>New York City Leading Causes of Death</h1>
      <p>
        The leading causes of death by sex and ethnicity in New York City since
        2007. Cause of death is derived from the NYC death certificate which is
        issued for every death that occurs in New York City.
      </p>
      <p>
        Source: Bureau of Vital Statistics and New York City Department of
        Health and Mental Hygiene
      </p>
    </Jumbotron>
  );
}

export default MyHeader;
