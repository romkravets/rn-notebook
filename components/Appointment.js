import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import GrayText from './GrayText';
import Badge from './Badge';

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