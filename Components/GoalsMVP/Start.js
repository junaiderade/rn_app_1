import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button, Pressable } from 'react-native';
import MyStyles from "../../MyStyles";

const Start = ({navigation}) => {
    return (
        <View style = {MyStyles.center}>
            <Pressable 
            // button can't take a style prop
            style = {MyStyles.pressable}
            onPress={() => navigation.navigate('SignIn')}
            >
                <Text
                style = {MyStyles.pressable_text}
                >
                    Sign In
                </Text>
            </Pressable>

            <Pressable 
            // button can't take a style prop
            style = {MyStyles.pressable}
            onPress={() => navigation.navigate('SignUp')}
            >
                <Text
                style = {MyStyles.pressable_text}
                >
                    Sign Up
                </Text>
            </Pressable>
        </View>
    )
}

export default Start;