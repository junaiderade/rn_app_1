import React from "react";
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import MyStyles from "../../MyStyles";
import UserPool from "./UserPool";

const SignUp = ({navigation}) => {
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
            onPress={() => UserPool.signUp(email,password,[],null, (err,data) => {
                if(err) {
                    console.log("error: " + err)
                }else{
                    navigation.navigate('SignedUp')
                }
                console.log(data);
                //if you try to sign up, you will get an error  in console, which you can use to let uer know how to fix problem
            })}
            >
                <Text
                style = {MyStyles.pressable_text}
                >Sign In</Text>
            </Pressable>
        </View>        
    )
}

export default SignUp;