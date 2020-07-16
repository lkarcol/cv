import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Header, Contact, Content, Main } from './components';
import { svkData, engData } from './data';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;


const StyledPage = styled.div`
  background-color: #FFFFFF;
  position:relative;
  padding-bottom:50px;
`;

const languages = {
  'SVK': svkData,
  'ENG': engData
};

function Page() {

  const [language, setLanguage] = useState('SVK');

  const renderContent = () => {
    return languages[language].content.map(({ title, main }, key) => {
      return (
        <Content key={key} title={title}>
          {
            main.map(({ props }, key) => <Main key={key} {...props} />)
          }
        </Content>
      )
    })
  }

  const getNewLng = () => language === 'SVK' ? 'ENG' : 'SVK';
  
  const onLanguageClickCb = () => {
    setLanguage(getNewLng());
  }

  return (
    <>
      <GlobalStyle />
      <StyledPage>
        <Header {...languages[language].header} />
        <Contact contact={languages[language].contact} onLanguageClick={onLanguageClickCb} lng={getNewLng()} />
        {
          renderContent()
        }
      </StyledPage>
    </>
  );
}

export default Page;
