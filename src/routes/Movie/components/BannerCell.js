import React, { Component } from 'react';
import {
    Image
} from 'react-native';
import { Styles } from './Styles';

class Banner extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.cover = this.props.image;
    }
    render() {
        return(
            <Image source={{uri: this.cover}} style={Styles.container}/>
        );
    }
}

export default Banner;