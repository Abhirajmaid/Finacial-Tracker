import React from "react";
import Hero from "../../containers/Hero";
import LatestTrans from "../../containers/LatestTrans";
import { PageContainer } from "../../global/GlobalStyle";

const Home = () => {
  return (
    <>
      <PageContainer>
        <Hero />
        <LatestTrans />
      </PageContainer>
    </>
  );
};
export default Home;
