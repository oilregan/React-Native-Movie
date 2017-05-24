import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Styles } from './Styles';

class Ticket extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.completedTicketText}>คุณได้จองตั๋วเป็นที่เรียบร้อย</Text>
                <TouchableHighlight style={Styles.touchableButton} onPress={() => {
                    Actions.pop();
                }}>
                    <Text style={Styles.buttonColor}>เสร็จสิ้น</Text>
                </TouchableHighlight>
            </View>
        );
    };
}

export default Ticket;