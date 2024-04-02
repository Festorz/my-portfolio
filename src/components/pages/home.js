import React from "react";
import my_pic from "../../data/images/mpic.jpeg";
import {
  MainBox,
  StyledColumn,
  StyledImage,
  StyledSection,
  StyledText,
} from "../styles/styles";

const Home = () => {
  return (
    <MainBox>
      <StyledSection mtop={0} mreverse>
        <StyledImage component="img" alt="Festus kirui" src={my_pic} />
        <StyledColumn>
          <StyledText mfontsize={45} mcolor={"#e3f2fd"}>
            Hey There,
          </StyledText>
          <StyledText mfontsize={45}>
            <b style={{ color: "#27AE60" }}>I'm</b> Festas Kibet Kirui
          </StyledText>
          <StyledText align="" mcolor={"#e3f2fd"} mfontsize={45}>
            A full stack software <br /> Engineer.
          </StyledText>
          <StyledText mcolor={"#e3f2fd"} mfontsize={18} mtop={20} mbold>
            I have specialized in both web & mobile applications development{" "}
            <br />
            and code deployment operations (DevOps).
          </StyledText>
        </StyledColumn>
      </StyledSection>
    </MainBox>
  );
};

export default Home;
