import React from 'react';
import {
    StyleSheet
} from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    touchableButton: {
        paddingTop: 10,
        backgroundColor: "#E45664",
        height: 40
    },
    buttonColor: {
        color: "white",
        textAlign: "center"
    },
    completedTicketText: {
        textAlign: "center",
        paddingBottom: 10
    }
});