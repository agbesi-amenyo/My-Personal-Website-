import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle  main center  >
        Welcome to my <br />
        Personal Profile 
      </SectionTitle>

      <SectionText>
        Hi there! My name is Agbesi Amenyo. I am a front end developer with knowledge in React and SwiftUI.
        I can help you build clean and nice websites like this with my knowledge in HTML, CSS & Javascript (React).
        I also have months of exeprience in iOS development (SwiftUI) and i can help you build beautiful iOS mobile apps. 
      </SectionText>
      <Button onClick = {()=> window.location = "https://www.linkedin.com/in/agbesi-amenyo/"} > Learn More  </Button>

    </LeftSection>
  </Section>
);

export default Hero;