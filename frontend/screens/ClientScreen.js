import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import styled from 'styled-components/native';
import GrayText from '../components/GrayText';
import Button from "../components/Button";
import Badge from "../components/Badge";
import Container from "../components/Container";
import { Foundation, Ionicons  } from '@expo/vector-icons';

const ClientScreen = ({route, navigation}) => {

    const item = route.params;

    return (
        <View style={{flex: 1}}>

        <ClientDetails>
            <ClientFullName>{console.log(item.client) || item.client.fullname}</ClientFullName>
            <GrayText>{item.client.phone}</GrayText>

            <BlockButtons>
                <MoreButtonView>
                    <Button>Детально</Button>
                </MoreButtonView>
                <PhoneButtonView>
                    <Button background="#84D269">
                        <Foundation name="telephone" size={24} color="white" />
                    </Button>
                </PhoneButtonView>
            </BlockButtons>

        </ClientDetails>

        <ClientAppointments>
            <Container>
                <AppointmentCard>
                    <MoreButton>
                        <Ionicons name="md-more" size={20} color="#A3A3A3" />
                    </MoreButton>
                    <AppointmentCardRow>
                        <Ionicons name="ios-hand" size={20} color="#A3A3A3" />
                        <AppointmentCardLabelText>Послуга: <Text style={{fontWeight: '600'}}>Нарощення</Text></AppointmentCardLabelText>
                    </AppointmentCardRow>
                    <AppointmentCardRow>
                        <Ionicons name="md-clipboard" size={20} color="#A3A3A3" />
                        <AppointmentCardLabelText>Примітка: <Text style={{fontWeight: '600'}}>Новий</Text></AppointmentCardLabelText>
                    </AppointmentCardRow>
                    <AppointmentCardRow style={{justifyContent: 'space-between', marginTop: 15}}>
                        <Badge style={{width: 155}} active>11.10.2019 - 15:40</Badge>
                        <Badge color="green">1500 Р</Badge>
                    </AppointmentCardRow>
                </AppointmentCard>
            </Container>
        </ClientAppointments>
        </View>
    );
}

const MoreButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 25px;
    top: 10px;
    height: 32px;
    width: 32px;
`;

const AppointmentCardLabelText = styled.Text`
    font-size: 16px;
    margin-left: 10px;
    
`;

const AppointmentCardRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 3.5px;
    margin-bottom: 3.5px;
`;

const AppointmentCard = styled.View`
/*    shadow-color: rgba(0, 0, 0, 1);
    elevation: 1;
    shadowOpacity: '0,4';
    shadow-radius: 3.5;*/
    padding: 20px 25px;
    border-radius: 10px;
    background: white;
`;

const ClientDetails = styled(Container)`
    flex: 0.3;
    background: #F8FAFD;
`;

const ClientAppointments = styled.View`
    flex: 1;
    background: #E5E5E5;
`;

const MoreButtonView = styled.View`
    flex: 1;
`;

const PhoneButtonView = styled.View`
    margin-left: 10px;
    width:  45px;
`;

const BlockButtons = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px 0 20px 0;
`;

const ClientFullName = styled.Text`
    font-size: 24px;
    font-weight: 800;
    color: #303030;
    line-height: 30px;
    margin-bottom: 3px;
`;

export default ClientScreen;