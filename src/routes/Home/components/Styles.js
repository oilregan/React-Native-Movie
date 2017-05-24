import React from 'react';
import {
    StyleSheet
} from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: '#47315a',
        borderBottomWidth: 1
    },
    cell: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10
    },
    image: {
    height: 200,
    width: 150,
    justifyContent: "flex-start",  
    resizeMode: "cover",
    }
});