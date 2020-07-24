import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import  {SectionTitle } from './components';
import Appointment from './components/Appointment';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';


const DATA = [
    {
        title: "24 липня",
        data: [
            {
                time: '15:30',
                diagnosis: 'нарощення',
                active: true,
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
        ]
    },
    {
        title: "25 липня",
        data: [
            {
                time: '15:30',
                diagnosis: 'нарощення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullname: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                }
            },
        ]
    },
];

export default function App() {
  return (
    <Container>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) =>  <Appointment {...item} />}
            renderSectionHeader={({ section: { title } }) => (
                <SectionTitle>{title}</SectionTitle>
            )}
        />
        <PlusButton style={{
            shadowColor: "#2A86FF",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.5,

            elevation: 5,
        }}>
            <Ionicons name="ios-add" size={36} color="white" />
        </PlusButton>
    </Container>
  );
}

const  PlusButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2A86FF;
    position: absolute;
    right: 25px;
    bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;


