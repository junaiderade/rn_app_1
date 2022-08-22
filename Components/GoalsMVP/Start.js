import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';


const Start = ({navigation}) => {
    return (
        <View>
            <Button
            title = "Sign In"
            onPress={() => navigation.navigate('SignIn')}
            />
            <Button
            title = "Go back"
            />
        </View>
    )
}

export default Start;