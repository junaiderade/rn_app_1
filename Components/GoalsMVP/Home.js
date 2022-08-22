import React, { useState } from 'react';
import {Text, View, Button } from 'react-native';

const Home = ({navigation, route}) => {

    const {username} = route.params; //the {} does destructuring
    
    return (
        <View>
            <Text>
                Logged in as {username}
            </Text>
        </View>
    )
}

export default Home;