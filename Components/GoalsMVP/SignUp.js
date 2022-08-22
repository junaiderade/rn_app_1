import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';


const SignUp = ({navigation}) => {
    return (
        <View>
        <Text>Email</Text>
        <TextInput
            value=""
        />
        <Text>Username</Text>
        <TextInput
            value=""
        />
        <Text>Password</Text>
        <TextInput
            value=""
        />
        </View>
    )
}

export default SignUp;