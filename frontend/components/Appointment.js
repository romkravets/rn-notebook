import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import GrayText from './GrayText';
import Badge from './Badge';

const Appointment = ({navigate, item}) =>  {
    const { client, service, active, time } = item;

    return (
        <GroupItem onPress={() => {navigate('CartClient', item)}}>
            <Avatar style={{backgroundColor: 'green',}}>
                <Letter>{client.fullname[0].toUpperCase()}</Letter>
            </Avatar>
            <View style={{flex: 1}}>
            <FullName>{client.fullName}</FullName>
            <GrayText>{service}</GrayText>
            </View>
            <Badge active={active}>{time}</Badge>
        </GroupItem>
    );
}

Appointment.defaultProps = {
    title: 'Untitled',
    items: [],
};

export default Appointment;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Letter = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

const Avatar = styled.View`
  align-items: center;
  justify-content: center;
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