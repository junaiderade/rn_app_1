import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

const TweetByID = (props) => {
    const [tweetID,setTweetID] = React.useState("");
    const [tweet,setTweet] = React.useState("");

    //YOU GOT THIS ALL FROM POSTMAN! details in how to
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer");
    myHeaders.append("Cookie", "guest_id=v1%3A165885193732030660");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const getTweet = async() => {
        fetch("https://api.twitter.com/2/tweets/" + tweetID, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.data.text);
            setTweet(result.data.text)
        }
            )
        .catch(error => console.log('error', error));    
      }

    return (
        <View style={MyStyles.center}>
            <Text style={MyStyles.text}>Enter tweet id below to find a tweet by id!</Text>
            <TextInput style={MyStyles.textinput} onChangeText={setTweetID}>
                
            </TextInput>
            <Text style={MyStyles.secondary_text}>Note: Account must be public</Text>
            <Button
            onPress={getTweet}
            title = "Show Tweet"
            />
            <Text>{tweet}</Text>
        </View>
    )

}

export default TweetByID;