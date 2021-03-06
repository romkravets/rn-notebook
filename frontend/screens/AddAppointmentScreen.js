import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import styled from 'styled-components';
import { Item, Input, Label, Picker } from 'native-base';
//import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import DatePicker  from '@react-native-community/datetimepicker';
// import RNDateTimePicker  from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

import  Button  from '../components/Button';
import  Container  from '../components/Container';

import {clientsApi} from '../utils/api';



const AddAppointmentScreen = ({route, navigation}) => {
    const [values, setValues] = useState({});
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    // const [date, setDate] = useState(new Date(1598051730000));
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);

    const item = route.params;

    const handleChange = (name, e) => {
        const text = e.nativeEvent.text;
          setFieldValue(name, text);
    };

    const setFieldValue = (name, value) => {
        setValues({
        ...values,
        [name]: value
        });
        setDatePickerVisibility(false);
        setTimePickerVisibility(false);
    };

    const onSubmit = () => {
        alert(JSON.stringify(values));
        // clientsApi
        //     .add(values)
        //     .then(() => {
        //         navigation.navigate('Home');
        //     })
        //     .catch(e => {
        //         alert('BAD');
        //         console.log(e);
        //     });
    };


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

//   const handleDateConfirm = (date) => {
//     console.log("A date has been picked: ", date);
//     hideDatePicker();
//   };


  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

//   const handleTimeConfirm = (time) => {
//     console.log("A time has been picked: ", time);
//     hideTimePicker();
//   };


    return (
        <Container>
            <Item style={{ marginLeft: 0 }}>
                <Picker
                    mode="dropdown"
                    placeholder="Виберіть послугу"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    style={{ width: '100%' }}
                    onValueChange={setFieldValue.bind(this, 'service')}
                    selectedValue={values.service}
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
                   <Button onPress={showDatePicker}>Дата</Button>
                   <Button onPress={showTimePicker}>Час</Button>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        //date={new Date()}
                        onConfirm={setFieldValue.bind(this, 'date')}
                        onCancel={hideDatePicker}
                        // date={values.dete}
                    />
                     <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={setFieldValue.bind(this, 'time')}
                        onCancel={hideTimePicker}
                        locale="en_GB"
                        // date={new Date()}
                        // date={values.time}
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