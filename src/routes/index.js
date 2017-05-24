import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View } from 'react-native';
import Home from './Home/index';
import Movie from './Movie/index';
import Ticket from './Ticket/index';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home"
                        component={Home}
                        title="Movies"
                        initial={true}
                    />
                    <Scene key="movie"
                        component={Movie}
                        title="Movie Detail" />
                    <Scene key="ticket"
                        component={Ticket}
                        title="Ticket"
                        schema="modal"
                        hideNavBar={true}
                        direction="vertical" />
                </Scene>
            </Router>

        );
    }
}

export default Routes;