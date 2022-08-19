import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

const DadJoke = (props) => {

    const [dadJoke,setDadJoke] = React.useState("");

    const getDadJokeFromAPI = async() => {
      try{
        const response = await fetch(
          'https://icanhazdadjoke.com/',
          {
            method: 'GET',
            headers: 
              {
                Accept: 'application/json'
              }
          });
        const json = await response.json();
        setDadJoke(json.joke);
      }catch (error){
        console.log("error is" + error);
      }
    }
    //you wrote this code based on the fetch a random dad joke section: https://icanhazdadjoke.com/api#api-response-format
    
    const getMoviesFromApiAsync = async () => {
        try {
          const response = await fetch(
            'https://reactnative.dev/movies.json'
          );
          const json = await response.json();
          setDadJoke(json.movies[0].title)//movies is an array
        } catch (error) {
          console.error(error);
        } finally {
          console.log("it works!")
        }
      };

    return (
        <View style = {MyStyles.center}>
        <Text style={MyStyles.secondary_text}>{dadJoke}</Text>
        <Button
            onPress={getDadJokeFromAPI}
            title = "Click for a New Dad Joke"
          />
        </View>
    )
}

export default DadJoke