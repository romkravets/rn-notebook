import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import styled from 'styled-components';
import { Item, Input, Label, Picker } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Ionicons } from '@expo/vector-icons';

import  Button  from '../components/Button';
import  Container  from '../components/Container';

import {clientsApi} from '../utils/api';



const AddAppointmentScreen = ({route, navigation}) => {
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
            <Item style={{ marginLeft: 0 }}>
                <Picker
                    mode="dropdown"
                    placeholder="Виберіть послугу"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    style={{ width: '100%' }}
                    // onValueChange={setFieldValue.bind(this, 'service')}
                    // selectedValue={values.diagnosis}
                >
                    <Picker.Item label="гель-лак" value="гель-лак" />
                    <Picker.Item label="педикюр" value="педикюр" />
                    <Picker.Item label="макіяж" value="макіяж" />
                </Picker>
            </Item>
            <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
                <Label>Опис</Label>
                <Input
                    onChange={handleChange.bind(this, 'description')}
                    value={values.phone}
                    // keyboardType="numeric"
                    // dataDetectorTypes="phoneNumber"
                />
            </Item>
            <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
                <Label>Ціна</Label>
                <Input
                    onChange={handleChange.bind(this, 'price')}
                    value={values.birthday}
                    keyboardType="numeric"
                    // dataDetectorTypes="calendarEvent"
                />
            </Item>
            <Item style={{ marginTop: 20, marginLeft: 0 }}>
            <TimeRow>
                <View style={{ flex: 1 }}>
                    <DatePicker
                    date={new Date()}
                    mode="date"
                    placeholder="Дата"
                    format="YYYY-MM-DD"
                    minDate={new Date()}
                    confirmBtnText="Сохранить"
                    cancelBtnText="Отмена"
                    showIcon={false}
                    customStyles={{
                        dateInput: {
                        borderWidth: 0
                        },
                        dateText: {
                        fontSize: 18
                        }
                    }}
                    date={values.date}
                    // onDateChange={setFieldValue.bind(this, 'date')}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <DatePicker
                    mode="time"
                    placeholder="Время"
                    format="HH:mm"
                    minDate={new Date()}
                    confirmBtnText="Сохранить"
                    cancelBtnText="Отмена"
                    showIcon={false}
                    customStyles={{
                        dateInput: {
                        borderWidth: 0
                        },
                        dateText: {
                        fontSize: 18
                        }
                    }}
                    date={values.time}
                    // onDateChange={setFieldValue.bind(this, 'time')}
                    />
                </View>
            </TimeRow>
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

const TimeRow = styled.View`
  flex-direction: row;
`;

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export default AddAppointmentScreen;