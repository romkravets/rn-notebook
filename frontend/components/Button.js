import React from 'react';
import styled from 'styled-components/native';

const Button = ({children, background}) => {
    return (
        <ButtonWrapper background={background}>
            <ButtonText>{children}</ButtonText>
        </ButtonWrapper>
    )
}

Button.defaultProps = {
    background: '#2a86FF'
}

const ButtonWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background:  ${props => props.background};
    text-align: center;
    height: 45px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 500;
`;


export default Button;