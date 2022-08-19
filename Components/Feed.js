import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

const Feed = (props) => {
    return(
        <View style={MyStyles.center}>
            <Text style = {MyStyles.text}>Feed</Text>
        </View>
    )
}

const dummyData = [
    {
        id: "1",
        username: "junaiderade",
        text: "he who has great knowledge also has great sadness"
    },
    {
        id: "2",
        username: "insendi",
        text: "give a man a fish, and you will feed him for a day. teach a man to fish, and you will feed him for a lifetime."
    },
    {
        id: "3",
        username: "lulu",
        text: "it's not about the destination, it's about the journey"
    },
    {
        id: "4",
        username: "junaiderade",
        text: "be yourself, everyone else is already taken"
    },
    {
        id: "5",
        username: "yaqubed",
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
        id: "6",
        username: "zatardiva",
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        id: "7",
        username: "insendi",
        text: "So many books, so little time."
    },
    {
        id: "8",
        username: "insendi",
        text: "A room without books is like a body without a soul."
    },
    {
        id: "9",
        username: "lulu",
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    {
        id: "10",
        username: "rayhaan",
        text: "you know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {
        id: "11",
        username: "shoroqu",
        text: "You only live once, but if you do it right, once is enough"
    },
    {
        id: "12",
        username: "shoroqu",
        text: "Be the change that you wish to see in the world."
    }
]

export default Feed