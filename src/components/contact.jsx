import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
    display: flex;
    width: 720px;
    margin: auto;
    justify-content: space-between;
    margin-top: 8px;

    @media(max-width:767px){
        width: 100%;
        flex-direction: column;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Space Mono', monospace;

    & > span:first-child {
        color:#30343F;
        font-size: 16px;
    }

    & > span:last-child {
        font-size: 18px;
        font-weight: bold;
    }

    @media(max-width:767px){
        align-items: center;
        margin-bottom:10px;
    }

`;

const LanguageButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    text-decoration: underline;
    outline: none;

    &:hover{
        text-decoration: none;
    }
`;


const Contact = ({ contact, onLanguageClick, lng }) => {

    const renderContactInfo = () => contact.map(({ title, text }, key) => {
        return (
            <ContactInfo key={key}>
                <span>
                    {title}
                </span>
                {
                    title === 'Github' ? (
                        <a href={text}>Github</a>
                    ) : (
                            <span>
                                {text}
                            </span>
                        )
                }
            </ContactInfo >
        )
    })

    return (
        <StyledContact>
            {renderContactInfo()}
            <LanguageButton onClick={onLanguageClick}>{lng}</LanguageButton>
        </StyledContact>
    );
}

export default Contact;