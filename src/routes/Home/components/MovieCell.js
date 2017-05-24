import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import { Styles } from './Styles.js';
import { Actions } from 'react-native-router-flux';

class MovieCell extends Component {
    constructor(props) {
        super(props);
        this.thaiName = this.props.data.name_th;
        this.engName = this.props.data.name_eng;
        this.releaseDates = this.props.data.release_dates;
        this.imageURL = this.props.data.imageURL;
        this.coverURL = this.props.data.coverURL;
    }

    render() {
        const gotoMovieDetail = () => Actions.movie({ movie: this });

        return (
            <TouchableHighlight onPress={gotoMovieDetail}>
            <View style={Styles.container}>
                <View style={Styles.cell}>
                    <Image
                        style={Styles.image}
                        source={{ uri: this.imageURL }}
                    />
                    <View style={Styles.text}>
                        <Text>{this.thaiName}</Text>
                        <Text>{this.engName}</Text>
                        <Text>วันที่เข้าฉาย {this.releaseDates}</Text>
                    </View>
                </View>
            </View>
            </TouchableHighlight>
        );
    }
}

export default MovieCell;