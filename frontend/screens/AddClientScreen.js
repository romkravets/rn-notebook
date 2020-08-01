import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import styled from 'styled-components';
import { Item, Input, Label } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import  Button  from '../components/Button';
import  Container  from '../components/Container';

import {clientsApi} from '../utils/api';



const AddClientScreen = ({route, navigation}) => {
    const [values, setValues] = useState({});

    const item = route.params;

    const handleChange = (name, e) => {
        const text = e.nativeEvent.text;
        setValues({
            ...values,
            [name]: text,
        });
    };

    const onSubmit = () => {
        clientsApi
            .add(values)
            .then(() => {
                navigation.navigate('Home');
            })
            .catch(e => {
                alert('BAD');
                console.log(e);
            });
    };

    return (
        <Container>
            <Item style={{ marginLeft: 0 }} floatingLabel>
                <Label>Ім'я та Прізвище</Label>
                <Input
                    onChange={handleChange.bind(this, 'fullname')}
                    value={values.fullname}
                />
            </Item>
            <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
                <Label>Номер телефону</Label>
                <Input
                    onChange={handleChange.bind(this, 'phone')}
                    value={values.phone}
                    keyboardType="numeric"
                    dataDetectorTypes="phoneNumber"
                />
            </Item>
            <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
                <Label>Номер телефону</Label>
                <Input
                    onChange={handleChange.bind(this, 'birthday')}
                    value={values.birthday}
                    keyboardType="numeric"
                    dataDetectorTypes="calendarEvent"
                />
            </Item>
            <ButtonView>
                <Button onPress={onSubmit} background="#87CC6F">
                    <Ionicons name="ios-add" size={24} color="white" />
                    <Text>Додати клієнта</Text>
                </Button>
            </ButtonView>
        </Container>
    );
}

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export default AddClientScreen;