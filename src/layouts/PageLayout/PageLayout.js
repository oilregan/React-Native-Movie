import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Styles } from './Styles';

export const PageLayout = ({ children }) => (
    <div style={Styles.container}>
        {children}
    </div>
);

export default PageLayout;