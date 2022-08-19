import React from 'react';
import MyStyles from '../MyStyles'
import WordStyles from '../Styles/WordStyles';
import {Text, View, TextInput, Button, StyleSheet } from 'react-native';

//change this to figure out who likes your tweets most consistently
const DynamoEx = (props) => {

    const [usernames,setUsernames] = React.useState([]);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    const getUsernames = async() => {
        try{
          const response = await fetch(
            "http://expressserver1-env.eba-spmmyk79.us-east-1.elasticbeanstalk.com/usernames",
            {
              method: 'GET',
            });
          const json = await response.json();
          setUsernames(json.Items);
        }catch (error){
          console.log("error is" + error);
        }
      }

      React.useEffect(() => {
        getUsernames();
        return () => setUsernames([]);//i guess you need to have this in order to clean up
      });

    return(
        <View style={MyStyles.center}>
        <Text style={WordStyles.wordCloudContainer}>
        {
            usernames.map((item,index) =>
                <Text key={index}>{item.username} </Text>
            )
        }
        </Text>

      
        </View>
    )
    

};



//change the name of this to word cloud

export default DynamoEx;