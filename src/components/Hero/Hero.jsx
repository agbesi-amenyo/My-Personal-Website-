import React from 'react';
import { Link } from 'react-router-dom'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle  main center  >
        Welcome to my <br />
        Personal Online Profile 
      </SectionTitle>

      <SectionText>
      I am a qualified engineer (M.Sc.) with over 2 years' experience in software development. 
      I have worked with several programming languages. My favourite project I worked on was as an iOs developer for the 
      <Link to = "https://aegisrider.com/" >Aegis Rider Project</Link>
      I'm looking to apply my experience to innovative projects that will also enable me to hone my skills. 
      </SectionText>
      <Button onClick = {()=> window.location = "https://www.linkedin.com/in/agbesi-amenyo/"} > Learn More  </Button>

    </LeftSection>
  </Section>
);

export default Hero;