import React, { useState } from 'react';
import {Text, View, Button } from 'react-native';

const Home = ({navigation, route}) => {

    const {username} = route.params; //the {} does destructuring
    
    return (
        <View>
            Logged in as {username}
        </View>
    )
}

export default Home;