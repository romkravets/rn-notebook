import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, Alert } from 'react-native';
import  { SectionTitle } from '../components';
import  { PlusButton } from '../components';

import Appointment from '../components/Appointment';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import { appointmentsApi } from '../utils/api';


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

    const removeAppointment = id => {
        Alert.alert(
        'Видалити запис',
        'Ви впевнені у видалені заису?',
        [
            {
            text: 'Відміна',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
            },
            {
            text: 'Видалити',
            onPress: () => {
                setIsLoading(true);
                appointmentsApi
                .remove(id)
                .then(() => {
                    fetchAppointments();
                })
                .catch(() => {
                    setIsLoading(false);
                });
            }
            }
        ],
        { cancelable: false }
        );
  };

    return (
        <Container>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item._id}
                onRefresh={fetchAppointments}
                refreshing={isLoading}
                renderItem={({ item }) => (
                    <Swipeable
                    key={item._id}
                    rightButtons={
                        [<SwipeViewButton style={{ backgroundColor: '#B4C1CB' }}>
                            <Ionicons name="md-create" size={28} color="white" />
                        </SwipeViewButton>,
                        <SwipeViewButton
                            onPress={removeAppointment.bind(this, item._id)}
                            style={{ backgroundColor: '#F85A5A' }}>
                            <Ionicons name="ios-close" size={48} color="white" />
                        </SwipeViewButton>]
                    }>
                        <Appointment navigate={props.navigation.navigate} item={item} />
                    </Swipeable>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />
             <PlusButton onPress={props.navigation.navigate.bind(this, 'AddClient')}  style={{
                shadowColor: "#2a86ff",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2.5,

                elevation: 5,
            }}/>
        </Container>
    );
}

export default HomeScreen;

const SwipeViewButton = styled.TouchableOpacity`
  width: 75px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Container = styled.View`
  flex: 1;
  background: #fff;
`;
