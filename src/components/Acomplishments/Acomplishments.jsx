import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2-time', text: 'Top Performer at AmaliTech Training Academy', },
  { number: 52, text: 'Open Source Projects- All available on Github'},
  { number: 2, text: 'Paid Projects', },
];

const Acomplishments = () => (
 <Section>
   <SectionTitle> Personal Accomplishments </SectionTitle>
   <Boxes>
     {data.map((card, index)=>(
       <Box key ={index} >
         <BoxNum>{card.number}</BoxNum>
         <BoxText>{card.text}</BoxText>

       </Box>
     ))}
   </Boxes>
   <SectionDivider/>
 </Section>

);

export default Acomplishments;
