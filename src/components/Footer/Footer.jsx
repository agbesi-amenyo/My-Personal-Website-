import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section>
   <FooterWrapper>
     <LinkList>
     {/* Phone Number */}
     <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem  href="tel:(+33)758464554" >(+33)758464554</LinkItem>
     </LinkColumn>
     {/* Email */}
     <LinkColumn>
     <LinkTitle>E-mail</LinkTitle>
     <LinkItem  href="mailto:agbesiamenyo@gmail.com" >agbesiamenyo@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>

     <SocialIconsContainer>
     <CompanyContainer>
       <Slogan>Improving one project at a time </Slogan>
     </CompanyContainer>
     {/* SOCIALS  */}
     {/* <SocialIconsContainer> */}
{/* Github */}
     <SocialIcons  href ="https://github.com/a-amenyo">
       <AiFillGithub size = "3rem " />
     </SocialIcons>
{/* LinkedIn */}
     <SocialIcons  href ="https://www.linkedin.com/in/agbesi-amenyo/">
       <AiFillLinkedin size = "3rem " />
     </SocialIcons>
{/* Twitter*/}
     <SocialIcons  href ="https://twitter.com/codewithgrids?s=20">
       <AiFillTwitterCircle size = "3rem " />
     </SocialIcons>
     </SocialIconsContainer>

     {/* </SocialIconsContainer> */}
    
   </FooterWrapper>
   </Section>
  );
};

export default Footer;
