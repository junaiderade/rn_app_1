import React from 'react';
import MyStyles from '../MyStyles'
import WordStyles from '../Styles/WordStyles';
import {Text, View, TextInput, Button, StyleSheet } from 'react-native';
import MostCommonWords from './MostCommonWords'; //this is a set you exported from a different file

console.log(MostCommonWords.size);
//change this to figure out who likes your tweets most consistently
const TwitterWordCloud = (props) => {

    const [username,setusername] = React.useState("");
    const [finalWords,setFinalWords] = React.useState([]);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAC4KVwEAAAAAZZIWwgaJ7rOjV%2BnfCbYco8nAswQ%3DsiBMn8P9wkoQjvZtsCTPmQn3w6SZxIRe5EtysBD7L66zdp40bD");
    myHeaders.append("Cookie", "guest_id=v1%3A165885193732030660");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const getUserIdFromUsername = () => {
        fetch("https://api.twitter.com/2/users/by?usernames="+username, requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result.data[0].id);
            getTweetsFromUsername(result.data[0].id)
        }
            )
        .catch(error => console.log('error', error));
    }
    
    //because of the way the API call is set up, you need to use the twitter id, not the username to get tweet
    const getTweetsFromUsername = (id) => {
        fetch("https://api.twitter.com/2/users/"+id+"/tweets?max_results=100", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            organizeWordsByFrequency(result.data)
        }
            )
        .catch(error => console.log('error', error));
    }

    const organizeWordsByFrequency = (tweets) => {

        let words_by_count = new Map();//create a map of <word,frequency of word>
        
        
        for(let tweet of tweets){
            let words = tweet.text.split(" ");//add each word in each tweet to above map
            for(let word of words){
                if(!MostCommonWords.has(word.toLowerCase())){
                    if(!words_by_count.has(word)){
                        words_by_count.set(word,0);
                    }
                    words_by_count.set(word,words_by_count.get(word)+1);
                }
            }
        }

        words_by_count = [...words_by_count.entries()];//turn map into an array of [word,frequency of word]

        words_by_count.sort((a,b) => b[1]-a[1]);//sort by frequency of word

        words_by_count = words_by_count.slice(0,50);//you don't want to display 1000 words on the screen lol

        setFinalWords(words_by_count);
    }



    return(
        <View style={MyStyles.center}>

            <Text style={WordStyles.wordCloudContainer}>
                {finalWords.map((finalWord,index) => (
                            <Text key={index} style={WordStyles.one}>
                            {finalWord[0] + " "}
                            </Text>
                        )
                    )}
            </Text>

            <Text style={MyStyles.secondary_text}>Enter a username to see a word cloud from their last 100 tweets</Text>
            <TextInput 
            style={MyStyles.textinput}
            onChangeText={setusername}
            ></TextInput>
            <Button
            onPress={getUserIdFromUsername}
            title="Submit"
            />
        </View>
    )
    

};



//change the name of this to word cloud

export default TwitterWordCloud;