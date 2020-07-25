import React from 'react';
import styled from 'styled-components/native';

const getColor = ({ active, color }) => {
    const colors = {
        green: {
            background: 'rgba(132, 210, 105, 0.21)',
            color: '#61BB42'
        },
        active: {
            background: '#2A86FF',
            color: '#fff'
        },
        default: {
            background: '#E9F5FF',
            color: '#4294ff'
        }
    };

    let result;
    if (active) {
        result = colors.active;
    } else if (color && colors[color]) {
        result = colors[color];
    } else {
        result = colors.default;
    }

    return result;
};

export default styled.Text`
  background: ${props => getColor(props).background};
  color: ${props => getColor(props).color};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;



/*
import React from 'react';

import styled from "styled-components/native";

export default  styled.Text`
  background: ${props => (props.colors ? props.colors.background : props.active ? '#2A86FF' : '#E9F5FF')};
  color: ${props => (props.active ? '#FFFFFF' : '#4294FF')};
  border-radius: 18px;
  font-weight: 800;
  font-size: 16px;
  height: 32px;
  width: 70px;
  text-align: center;
  line-height: 34px;
`;*/
