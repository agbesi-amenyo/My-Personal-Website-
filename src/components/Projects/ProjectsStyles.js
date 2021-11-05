import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: fit;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 3rem;
width : 100%;
place-items: center;
// background : white;
column-gap: 4rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  // box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.383);
  background : #171f2a;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #A2D2FF;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 30%;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #EEEBDD;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #A2D2FF;
  font-style: 2rem;
  line-height: 24px;
  border-bottom : 24px; 
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color: rgba(255, 255, 255, 0.75);;
font-size: 1.6rem;
padding:1rem 1.5rem;
border-radius: 12px;
transition: 0.5s;
&:hover{
  // background: #FEF5ED;
  color:#FFF;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color:#A2D2FF;
font-size: 1.5rem;
`