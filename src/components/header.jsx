import React from 'react';
import styled from 'styled-components';

const AVATAR_SIZE = 200;

const StyledHeader = styled.div`
    height:350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #B7B5B3;
`;

const PersonalInfo = styled.div`
    flex-basis: 720px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width:768px){
        width:100%;
        flex-direction: column;
    }
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Space Mono', monospace;

    & > span:first-child {
        font-size: 50px;
        line-height: 1;
        color: grey;
    }

    & > span:last-child {
        font-size: 80px;
        line-height: 1;
        color:#F3A712;
        font-weight: bold;
    }
    
    @media(max-width:768px){
        margin-top: 20px;
        text-align: center;

        & > span:first-child {
            font-size: 30px;
        }
    
        & > span:last-child {
            font-size: 50px;
        }
    }
`;

const Avatar = styled.img`
    width: ${AVATAR_SIZE}px;
    height: ${AVATAR_SIZE}px;
    border: 2px solid #FFFFFF;
    object-fit: cover;
    border-radius: 50%;

`;

const Header = ({ firstName, lastName }) => {
    return (
        <StyledHeader>
            <PersonalInfo>
                <Avatar src="./header.png" alt="avatar" />
                <Name>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </Name>
            </PersonalInfo>
        </StyledHeader>
    );
}

export default Header;