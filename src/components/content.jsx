import React from 'react';
import styled from 'styled-components';


const StyledContent = styled.div`
    width: 720px;
    display: flex;
    margin: auto;
    margin-top: 80px;
    font-family: 'Signika Negative', sans-serif;

    @media(max-width:767px){
        margin-top: 40px;
        flex-direction: column;
        width: 100%;
    }

`;

const LeftPanel = styled.div`
    flex: 1;
    border-right: 1px solid grey;

    & > span {
        font-size: 17px;
    }

    @media(max-width:767px){
        border:none;
        text-align:center;
        
        & > span {
            font-size: 20px;
        }
    }
`;

const Main = styled.div`
    flex: 4;
    font-size: 17px;
    padding-left:20px;
`;

const Content = ({ title, children }) => {
    return (
        <StyledContent>
            <LeftPanel>
                <span>{title}</span>
            </LeftPanel>
            <Main>
                {children}
            </Main>
        </StyledContent>
    )
}

export default Content;
