import React, {useState} from 'react';
import styled from 'styled-components';

const SectionGrid = styled.div`
  grid-area: exp;
  margin: 3rem;
`;

const ContentGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
  'company text text text text'
  'company text text text text'
  'company text text text text';
`

const Companies = styled.ul `
  grid-area: company;
  /* display: flex;
  flex-direction: column; */
  list-style-type: none;
`
const Text = styled.div `
  grid-area: text;
  display: flex;
  flex-direaction: column;
`

const Experience = () => {

  const [company, setCompany] = useState('salesforce');

  function updateText(e) {
    setCompany(e.target.name);
  }

  return (
    <SectionGrid>
      <div className='sections'>
        <div className='sectionNums'> .02 </div>
        Where I've Worked
      </div>
      <ContentGrid>
        <Companies>
          <li onClick={updateText} name='salesforce'>Salesforce</li>
          <li onClick={updateText} name='adara'>Adara</li>
        </Companies>
        <Text>
        {company === 'salesforce' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' :

        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </Text>

      </ContentGrid>
    </SectionGrid>
  )
}

export default Experience;