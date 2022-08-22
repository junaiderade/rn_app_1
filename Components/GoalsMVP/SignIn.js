import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';


const SignIn = ({navigation}) => {
    const [username,setUsername] = React.useState("")




    return (
        <View>
            <Text>Username</Text>
            <TextInput
                onChangeText={setUsername}
            />
            <Text>Password</Text>
            <TextInput
                value=""
            />
            <Button
                title = "Sign In"
                onPress={() => navigation.navigate(
                    'Home',
                    {
                        username: username
                    }
                )}
            />
        </View>
        
    )
}

export default SignIn;