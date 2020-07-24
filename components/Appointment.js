import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import GrayText from './GrayText';

const Appointment = ({navigate, item}) =>  {
    const { user, diagnosis, active, time } = item;

    return (
        <GroupItem onPress={() => {navigate('CartClient', item)}}>
            <Avatar source={{
            uri: user.avatar,
        }}/>
            <View style={{flex: 1}}>
            <FullName>{user.fullName}</FullName>
            <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    );
}

Appointment.defaultProps = {
    title: 'Untitled',
    items: [],
};

export default Appointment;

const GroupDate = styled.Text`
  background: ${props => (props.active ? '#2A86FF' : '#E9F5FF')};
  color: ${props => (props.active ? '#FFFFFF' : '#4294FF')};
  border-radius: 18px;
  font-weight: 800;
  font-size: 16px;
  height: 32px;
  width: 70px;
  text-align: center;
  line-height: 34px;
`;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;


const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;


const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;