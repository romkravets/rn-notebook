import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import  {SectionTitle } from './components';
import Appointment from './components/Appointment';
import styled from 'styled-components/native';

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
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;


