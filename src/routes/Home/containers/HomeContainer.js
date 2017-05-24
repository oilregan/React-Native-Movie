import React, { Component } from 'react';
import {
    View,
    Text, 
    ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Styles } from './Styles'
import  MovieCell  from '../components/MovieCell';
import { MovieList } from '../../../../MockData/MockData';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props = MovieList;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props)
        }
    }

    render() {
        return (
            <ListView 
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <MovieCell data={rowData}/>} 
            style={Styles.container}/>
        );
    }
}

export default Home;