import React from 'react';
import styled from 'styled-components';

const StyledEducation = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:20px;
`;

const Title = styled.span`
    color: #046110;
    font-size: 20px;
`;
const Description = styled.div`
    font-size: 19px;
    font-weight: bold;
    margin:0;
    white-space: pre-line;
`;

const Main = ({ title, text }) => {
    return (
        <StyledEducation>
            <Title>{title}</Title>
            <Description>
                {
                    text
                }
            </Description>
        </StyledEducation>
    );
}

export default Main;