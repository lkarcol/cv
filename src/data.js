const FIRST_NAME = "Lukáš";
const LAST_NAME = "Karcol";
const LOCATION = "Bratislava | Nitra";
const EMAIL = "lkkarcol@gmail.com";
const PHONE = "0902309532";
const GITHUB = 'https://github.com/lkarcol';
const SKILL20192020 = `Onestino.com
              FE: Next js(React,TypeScript), Graphql(Apollo) , Styled components
              BE: Node(Nest js , TypeORM,TypeScript), Postgresql , Graphql API
              AWS: RDS , EC2 , S3
`;

const KNOWLEDGE = [
  `ES6 , Canvas , Webpack , Websocket `,
  `Next js framework , Styled components , redux , Apollo`,
  `Nest js framework , TypeORM `,
  `Docker, AWS (S3,EC2,RDS) , Gitlab(CI)`
];

export const svkData = {
  header: {
    firstName: FIRST_NAME,
    lastName: LAST_NAME
  },
  contact: [
    {
      title: "Location",
      text: LOCATION
    },
    {
      title: "Email",
      text: EMAIL
    },
    {
      title: "Phone",
      text: PHONE
    },
    {
      title: "Github",
      text: GITHUB
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
            title: "Javascript / Typescript",
            text: KNOWLEDGE[0]
          }
        },
        {
          props: {
            title: "React / Graphql",
            text:  KNOWLEDGE[1]
          }
        },
        {
          props: {
            title: "Node js / Postgresql",
            text:  KNOWLEDGE[2]
          }
        },
        {
          props: {
            title: "Ostatne (základy)",
            text:  KNOWLEDGE[3]
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
            text: SKILL20192020
          }
        },
        {
          props: {
            title: "2017-2019",
            text: `Styllie.com Fashion Platforma.
                Vývoj frontendu. 
                Technológie: React , Graphql(Apollo client) ,  Styled components 
              `
          }
        },
        {
          props: {
            title: "2014-2015",
            text: `Laravel 5 `
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
  ]
};

export const engData = {
  header: {
    firstName: FIRST_NAME,
    lastName: LAST_NAME
  },
  contact: [
    {
      title: "Location",
      text: LOCATION
    },
    {
      title: "Email",
      text: EMAIL
    },
    {
      title: "Phone",
      text: PHONE
    },
    {
      title: "Github",
      text: GITHUB
    }
  ],
  content: [
    // ========================= EDUCATION =============================
    {
      title: "EDUCATION",
      main: [
        {
          props: {
            title: "2018-2020",
            text: `Mechatronics
                   Faculty of Electrical Engineering and Information Technology 
                   STU in Bratislava
                `
          }
        },
        {
          props: {
            title: "2014-2018",
            text: `Informatics
                    Faculty of Electrical Engineering and Information Technology 
                    STU in Bratislava
                `
          }
        },
        {
          props: {
            title: "2010-2014",
            text: `Mechatronics
                  SPŠ SE Nitra
                `
          }
        }
      ]
    },
    // ========================= Knowledge =============================
    {
      title: "Knowledge",
      main: [
        {
          props: {
            title: "Javascript / Typescript",
            text:  KNOWLEDGE[0]
          }
        },
        {
          props: {
            title: "Frontend: React / Graphql",
            text:  KNOWLEDGE[1]
          }
        },
        {
          props: {
            title: "Backend: Node js / Postgresql",
            text:  KNOWLEDGE[2]
          }
        },
        {
          props: {
            title: "Other (basics)",
            text:  KNOWLEDGE[3]
          }
        },
      ],
    },
    // ========================= Skills =============================
    {
      title: "Skills",
      main: [
        {
          props: {
            title: "2019-",
            text: SKILL20192020
          }
        },
        {
          props: {
            title: "2017-2019",
            text: `Styllie.com Fashion Platforma.
                Frontend developer. 
                FE Dev stack: React , Graphql(Apollo client) ,  Styled components 
              `
          }
        },
        {
          props: {
            title: "2014-2015",
            text: `Laravel 5 `
          }
        },
      ],
    },
    // ==================== Language ================================
    {
      title: "Language",
      main: [
        {
          props: {
            title: "German - A2"
          }
        },
        {
          props: {
            title: "English- B1"
          }
        }
      ]
    },
    // ==================== Záluby ================================
  ]
};
