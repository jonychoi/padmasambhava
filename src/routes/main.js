import React from 'react';
import { Screen } from '../components/base';
import {useLocation} from 'react-router-dom';

export const Main = ({}) => {
    const location = useLocation();
    console.log(location);
    return (
        <Screen>

        </Screen>
    )
};

export default Main;