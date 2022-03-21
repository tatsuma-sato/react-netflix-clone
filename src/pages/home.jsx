import React from "react";
import HeaderContainer from "../containers/Header.container";
import FaqsContainer from "../containers/Faqs.container";
import FooterContainer from "../containers/Footer.container";
import JumbotronContainer from "../containers/Jumbtron.container";
import { OptForm, Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV progarms and more</Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
