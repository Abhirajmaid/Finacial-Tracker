// react
import React from "react";

// components
import { Logo, HeroText, BalanceCard, AddTransaction } from "../components";

//styles
import { HeroSection, Nav, Section } from "./style";

const style = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
};

const Hero = () => {
  return (
    <>
      <Section>
        <Nav>
          <Logo />
        </Nav>
        <HeroSection>
          <HeroText />
          <div style={style}>
            <BalanceCard />
            <AddTransaction />
          </div>
        </HeroSection>
      </Section>
    </>
  );
};

export default Hero;
