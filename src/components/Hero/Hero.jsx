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
      I am a qualified engineer (M.Sc.) with over 2 years' experience in software development. 
      I have worked with several programming languages. 
      I'm looking to apply my experience to innovative projects that will also enable me to hone my skills.
      <SectionText>
 
      </SectionText>
      <Button onClick = {()=> window.location = "https://www.linkedin.com/in/agbesi-amenyo/"} > Learn More  </Button>

    </LeftSection>
  </Section>
);

export default Hero;