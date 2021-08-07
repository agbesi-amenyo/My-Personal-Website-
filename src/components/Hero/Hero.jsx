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
        I am Agbesi Kwaku Amenyo. I am a front end developer with knowledge in Java, 
        JavaScript, React and Swift.
      </SectionText>
      <Button onClick = {()=> window.location = "https://google.com"} > Learn More  </Button>

    </LeftSection>
  </Section>
);

export default Hero;