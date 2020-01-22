import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Header, Contact, Content, Main  } from './components';

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

const CvData = {
  header: {
    firstName: "Lukáš",
    lastName: "Karcol"
  },
  contact: [
    {
      title: "Location",
      text: "Bratislava | Nitra"
    },
    {
      title: "Email",
      text: "lkkarcol@gmail.com"
    },
    {
      title: "Phone",
      text: "0902309532"
    },
    {
      title: "Github",
      text: <a href="https://github.com/lkarcol" rel="noopener noreferrer" target="_blank">Github</a>
    }
  ],
  content: [
    // ========================= EDUCATION =============================
    {
      title: "VZDELANIE",
      main: [
        {
          props: {
            title: "2018-2020",
            text: `Automobilová Mechatronika, II.stupeň 
                Slovenská technická univerzita, 
                Bratislava Fakulta elektrotechniky a informatiky 
              `
          }
        },
        {
          props: {
            title: "2014-2018",
            text: `Aplikovaná Informatika, I.stupeň 
                Slovenská technická univerzita, 
                Bratislava Fakulta elektrotechniky a informatiky 
              `
          }
        },
        {
          props: {
            title: "2010-2014",
            text: `Mechatronika
                Stredná priemyselná škola strojnícka a elektrotechnická, Nitra 
              `
          }
        }
      ]
    },
    // ========================= Knowledge =============================
    {
      title: "ZNALOSTI",
      main: [
        {
          props: {
            title: "Javascript - 6/10",
            text: `ES6 , Canvas , Webpack , Websocket `
          }
        },
        {
          props: {
            title: "React - 7/10",
            text: `Next js framework , Styled components , redux`
          }
        },
        {
          props: {
            title: "Graphql - 5/10",
            text: `Apollo js pre manažment stavu`
          }
        },
        {
          props: {
            title: "TypeScript - 4/10",
            text: ``
          }
        },
        {
          props: {
            title: "Node js - 5/10",
            text: `Nest js framework , TypeORM , TypeGraphql`
          }
        },
        {
          props: {
            title: "Postgresql - 4/10",
            text: ``
          }
        },
      ],
    },
    // ========================= Skills =============================
    {
      title: "SKÚSENOSTI",
      main: [
        {
          props: {
            title: "2019-",
            text: `Vývoj FE a BE pre platformu vychádzajúcu zo Styllie.com
            FE: Next js(React,TypeScript), Graphql(Apollo) , CSS:Styled components
            BE: Node(Nest js , TypeORM,TypeScript), Postgresql , Graphql API
          
            Diplomovka: C++ , TTEthernet , Matlab/Simulink , RPi - Simulácia riadenia vesmírnej lode (Dragon)
            `
          }
        },
        {
          props: {
            title: "2017-2019",
            text: `Styllie.com Fashion Platforma.
              Vývoj frontendu. 
              Technológie: React , Graphql(Apollo client) , CSS: Styled components 
              Naučil som sa ako veľa vecí nerobiť :) a že je čas sa skamarátiť s Typescriptom.
            `
          }
        },
        {
          props: {
            title: "2016-2017",
            text: `Prechod z PHP , Laravel 
              Prvý kontakt s Node js , React , Websockety
              Pokus o remake hry RPS , ktorá bola na ICQ 
              https://rps-remake.herokuapp.com/`

          }
        },
      ],
    },
    // ==================== Jazyk ================================
    {
      title: "JAZYK",
      main: [
        {
          props: {
            title: "Slovenský jazyk - rodný jazyk"
          },
        },
        {
          props: {
            title: "Nemecký jazyk - A2"
          }
        },
        {
          props: {
            title: "Anglický jazyk - B1"
          }
        }
      ]
    },
    // ==================== Záluby ================================
    {
      title: "ZÁĽUBY",
      main: [
        {
          props: {
            title: "PC Hry",
            text: `Hlavne CS:GO`
          },
        },
        {
          props: {
            title: "Seriály",
            text: `Halt & Catch Fire , Silicon Valley my best `
          }
        },
        {
          props: {
            title: "Futbal",
            text: `FC Bayern ♥ `
          }
        },
        {
          props: {
            title: "Elon Musk , SpaceX , Tesla , Space tech ...",
          }
        }
      ]
    }
  ]
};

function Page() {

  const renderContent = () => {
    return CvData.content.map(({ title, main }, key) => {
      return (
        <Content key={key} title={title}>
          {
            main.map(({ props }, key) => <Main key={key} {...props} />)
          }
        </Content>
      )
    })
  }

  return (
    <>
      <GlobalStyle />
      <StyledPage>
        <Header {...CvData.header} />
        <Contact contact={CvData.contact} />
        {
          renderContent()
        }
      </StyledPage>
    </>
  );
}

export default Page;
