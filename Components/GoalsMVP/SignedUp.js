import React from "react";
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import MyStyles from "../../MyStyles";

const SignedUp = () => {
    return (
        <View style={MyStyles.center}>
            <Text style={MyStyles.mvp_text}>
                Congrats! You have signed up. Please verify your identity by clicking the link sent to your email! Once finished, please continue to the sign in page!
            </Text>
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
        </View>
    )
}

export default SignedUp;