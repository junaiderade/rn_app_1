import React, { useState } from 'react';
import {Text, View, TextInput, Button, Alert } from 'react-native';
import MyStyles from '../MyStyles';



const Login = ({navigation}) => {
    const [username,setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");

    return(
      <View style={MyStyles.center}>

        <Text style = {MyStyles.text}>Username</Text>
        <TextInput
            onChangeText={setUsername} //means you set the username everytime text changes
            style = {MyStyles.textinput}
            value = {username}
        ></TextInput>

        <Text style={MyStyles.text}>Password</Text>
        <TextInput 
            style = {MyStyles.textinput}
            onChangeText={setPassword}
            value = {password}
        ></TextInput>
        <Button
            title="Log in"
            onPress={() => password == "password" ? navigation.navigate('DadJoke') : console.log('swag')}
        />
      </View>
    )
  }

  export default Login;