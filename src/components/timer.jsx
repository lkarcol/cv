import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
    position: absolute;
    left: 300px;
`;

const Timer = () => {

    const [timer, setTimer] = useState(20);

    useEffect(() => {
        if (timer < 1) return;
        const timeout = setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(timeout);
    }, [timer]);


    return (
        <StyledTimer>
            {
                timer < 1 ? <img src="https://media.giphy.com/media/Awuqdc4Rj6MbS/giphy.gif" alt="" /> : timer
            }
        </StyledTimer>
    );

}

export default Timer;