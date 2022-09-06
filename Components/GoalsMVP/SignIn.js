import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js'
import React from "react";
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import MyStyles from "../../MyStyles";
import UserPool from "./UserPool";

const SignIn = ({navigation}) => {
    const [email,setemail] = React.useState("");
    const [password,setPassword] = React.useState("");

    return (
        <View style = {MyStyles.center}>
            <Text style = {MyStyles.mvp_text}>Email</Text>
            <TextInput
                style = {MyStyles.textinput}
                onChangeText={setemail}
            />

            <Text style = {MyStyles.mvp_text}>Password</Text>
            <TextInput
                style = {MyStyles.textinput}
                onChangeText={setPassword}
            />

            <Pressable 
            // button can't take a style prop
            style = {MyStyles.pressable}
            //refer to cognito docs for a lot of this
            onPress={() => {
                const user = new CognitoUser({
                    Username: email,
                    Pool: UserPool});

                const authDetails = new AuthenticationDetails({
                    Username: email,
                    Password: password
                });
        
                user.authenticateUser(authDetails, {
                    onSuccess: (data) => {
                        console.log("Logged In!", data);
                        navigation.navigate('Home',
                        {
                            email: email,
                            mode: 'test'
                        })
                    },
                    onFailure: (err) => {
                        console.error("Failure:", err);//console.error shows up as red
                        //if you try and log in without confirming you will get an error
                    },
                    newPasswordRequired: (data) => {
                        console.log("newPasswordRequired: ", data);
                    }
                });
            }

            
            }
            >
                <Text
                style = {MyStyles.pressable_text}
                >Sign In</Text>
            </Pressable>
        </View>        
    )
}

export default SignIn;