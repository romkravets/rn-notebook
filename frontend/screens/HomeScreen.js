import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import  {SectionTitle } from '../components';
import Appointment from '../components/Appointment';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import { appointmentsApi } from '../utils/api';

const DATA = [
    {
        title: "24 липня",
        data: [
            {
                time: '15:30',
                diagnosis: 'нарощення',
                active: true,
                user: {
                    fullName: 'Анжела Tтиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Латінева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 456-18-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 455-20-20',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 000-00-99',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
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
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
            {
                time: '15:30',
                diagnosis: 'відновлення',
                user: {
                    fullName: 'Анжела Матиева',
                    avatar: 'https://reactnative.dev/img/tiny_logo.png',
                    phone: '+3 (8096) 927-17-18',
                }
            },
        ]
    },
];


const HomeScreen = (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAppointments = () => {
        setIsLoading(true);
        appointmentsApi
            .get()
            .then(({ data }) => {
                setData(data.data);
            })
            .finally(e => {
                setIsLoading(false);
            });
    };

    useEffect(fetchAppointments, []);

    return (
        <Container>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                onRefresh={fetchAppointments}
                refreshing={isLoading}
                renderItem={({ item }) => (
                    <Swipeable rightButtons={
                        [ <Text>Left</Text>,
                            <Text>Right</Text>]
                    }>
                        <Appointment navigate={props.navigation.navigate} item={item} />
                    </Swipeable>
                )}
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

export default HomeScreen;

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
  background: #fff;
`;
