import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from 'react-native';
import styled from 'styled-components/native';

const AddClientScreen = ({route, navigation}) => {

    const item = route.params;

    return (
        <View style={{flex: 1}}>

            <Text>Form</Text>

        </View>
    );
}

export default AddClientScreen;