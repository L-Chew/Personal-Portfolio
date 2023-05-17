import React, {useState} from 'react';
import styled from 'styled-components';
import Pupper from '../../images/pupper.png';

// const size = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

const ContentGrid = styled.div`
  grid-area: proj;
`;


const ProjectContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    '... ... ... ... ... ... ... ...'
    '... pic pic ... ... descrpt descrpt ...'
    '... pic pic ... ... descrpt descrpt ...'
    '... ... ... ... ... ... ... ...';
    /* @media (max-width: 500px) {
          grid-template-columns: 20% auto;
          grid-template-areas:
            "...   ..."
            "pic  pic"
            "descrpt descrpt"
            "...   ...";
      } */
      /* @media only screen and (min-width: 600px) {
        grid-gap: 20px;
        grid-template-columns: 120px auto 120px;
        grid-template-areas:
          "... ... ..."
          "pic pic pic"
          "descrpt descrpt descrpt"
          "... ... ...";
        max-width: 600px;
      } */
`;

// const Image = styled.img`
//   grid-area: pic;
//   object-fit: contain;
// `;

const Picture = styled.picture`
  grid-area: pic;
  object-position: center;
  object-fit: cover;
`;

const Description = styled.div`
  grid-area: descrpt;
`;


const Projects = () => {
  return (
    <ContentGrid>
      <div className='sections'>
        <div className='sectionNums'> .03 </div>
        Things I've Created
      </div>
      <ProjectContent>
        <Picture> <source srcSet={Pupper}/> <img src={Pupper}/> </Picture>
        <Description>Pupper Description</Description>
      </ProjectContent>
      <ProjectContent>
        <Picture> <source srcSet='https://media.licdn.com/dms/image/sync/C5627AQHLpWciB1wolw/articleshare-shrink_800/0/1674930806098?e=1676494800&v=beta&t=RPccx1mRuMrqoEd-EltFHnj2l6geNaH_C_asng4cL6Y'/> <img src='https://media.licdn.com/dms/image/sync/C5627AQHLpWciB1wolw/articleshare-shrink_800/0/1674930806098?e=1676494800&v=beta&t=RPccx1mRuMrqoEd-EltFHnj2l6geNaH_C_asng4cL6Y'/> </Picture>
        <Description>Catwalk Description</Description>
      </ProjectContent>
      <ProjectContent>
        <Picture> <source srcSet='https://media.licdn.com/dms/image/sync/C5627AQGxK6Xhpa-RDg/articleshare-shrink_800/0/1675670454875?e=1676494800&v=beta&t=TA3PyUcMLmMBbjFb_o1OBCPEtXeWZ2b6ZC3VqsH0NXo'/> <img src='https://media.licdn.com/dms/image/sync/C5627AQGxK6Xhpa-RDg/articleshare-shrink_800/0/1675670454875?e=1676494800&v=beta&t=TA3PyUcMLmMBbjFb_o1OBCPEtXeWZ2b6ZC3VqsH0NXo'/> </Picture>
        <Description>Atelier Description</Description>
      </ProjectContent>
    </ContentGrid>
  )
}

export default Projects;