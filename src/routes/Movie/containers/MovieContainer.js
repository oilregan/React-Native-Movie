import React, { Component } from 'react';
import BannerCell from '../components/BannerCell';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { Styles } from './Styles';
import { Actions } from 'react-native-router-flux';

class Movie extends Component {
    constructor(props) {
        super(props);

        this.coverURL = this.props.movie.coverURL;
        this.thaiName = this.props.movie.thaiName;
        this.engName = this.props.movie.engName;
        this.releaseDates = this.props.movie.releaseDates;
    }

    render() {
        return (
            <View style={Styles.mainContainer}>
                <BannerCell image={this.coverURL} />
                <Text style={Styles.headerText}> {this.thaiName}</Text>
                <Text style={Styles.headerText}> {this.engName}</Text>
                <Text style={Styles.releaseText}> วันที่เข้าฉาย {this.releaseDates}</Text>
                <TouchableHighlight style={Styles.touchableButton} onPress={() => {
                    Actions.ticket();
                }}>
                    <Text style={Styles.buttonColor}>จองตั๋วเลย</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Movie;