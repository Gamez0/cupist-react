import React from 'react';

import styled from 'styled-components';

import { HomeLogo } from '../assets/icon/nav';

type iconButtonType = {
    src: string;
    // onPressedSrc?: string;
};

const StyledButton = styled.button`
    // -webkit-appearance: none;
    // -moz-appearance: none;
    appearance: none;
`;

const IconButton: React.FC<iconButtonType> = ({ src }) => {
    const [onPressed, setOnPressed] = React.useState(false);
    return (
        <StyledButton onClick={() => setOnPressed(true)}>
            <img src={src} alt={HomeLogo} />
        </StyledButton>
    );
};

export default IconButton;
