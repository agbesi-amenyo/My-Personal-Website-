import React from 'react';
import {  DiReact, DiSwift  } from 'react-icons/di';
import { SiAdobecreativecloud } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';



const Technologies = () =>  (
  <Section id="tech" >
     <SectionDivider/>
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
       I have worked with a range of technologies in both web and mobile development.
      
     </SectionText>
     <List>
       <ListItem>
         <DiReact size = "3rem"/>
         <ListContainer>
         <ListTitle>Front-End </ListTitle>
         <ListParagraph>
             Experience with HTML, CSS and React.js.
           </ListParagraph>
         </ListContainer>
       </ListItem>
   

    
       <ListItem>
         <DiSwift size = "3rem"/>
         <ListContainer>
         <ListTitle>iOs App Development </ListTitle>
         <ListParagraph>
             Experience with Swift.
           </ListParagraph>
         </ListContainer>
       </ListItem>
    

   
       <ListItem>
         <SiAdobecreativecloud size = "3rem"/>
         <ListContainer>
         <ListTitle>UI/UX Design </ListTitle>
         <ListParagraph>
             Experience with tools like Adobe Illustrator, XD, Premiere Pro and  PhotoShop
           </ListParagraph>
         </ListContainer>
       </ListItem>
     </List>
  </Section>
 
);

export default Technologies;
