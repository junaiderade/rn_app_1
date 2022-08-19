import {Button, Text, View} from 'react-native';
import React from "react"
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//my imports
import MyStyles from './MyStyles';
import DadJoke from './Components/DadJoke';
import Login from './Components/Login';
import TweetByID from './Components/TweetByID';
import TwitterWordCloud from './Components/TwitterWordCloud';
import DynamoEx from './Components/DynamoEx';

function HomeScreen({navigation}) {
  return (
    <View style = {MyStyles.center}>
    <Text style = {MyStyles.text}>Playground</Text>
    <Text style = {MyStyles.secondary_text}>This is a testing app junaid is building for learning purposes.</Text>
    <Button
    title="Login Functionality"
    onPress={() => navigation.navigate('Login')}
    />
    <Button
    title="Get Random Dad Joke (Public API)"
    onPress={() => navigation.navigate('DadJoke')}
    />
    <Button
    title="Get Tweet by ID (Private API)"
    onPress={() => navigation.navigate('TweetByID')}
    />
    <Button
    title="TwitterWordCloud (Private API)"
    onPress={() => navigation.navigate('TwitterWordCloud')}
    />
    <Button
    title="DynamoEX (built with express server 1)"
    onPress={() => navigation.navigate('DynamoEx')}
    />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="DadJoke" component={DadJoke}/>
        <Stack.Screen name='TweetByID' component={TweetByID}/>
        <Stack.Screen name="TwitterWordCloud" component={TwitterWordCloud}/>
        <Stack.Screen name="DynamoEx" component={DynamoEx}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

