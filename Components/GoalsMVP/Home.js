import React, { useState } from 'react';
import {Text, View, Button, SafeAreaView, FlatList} from 'react-native';
import MyStyles from '../../MyStyles';
import { StyleSheet } from 'react-native';


const test_data = 
[
  {
    desc: "clean room",
    due_date: "8/10"
  },
  {
    desc: "wash dishes",
    due_date: "8/11"
  },
  {
    desc: "do bjj",
    due_date: "8/12"
  }
];

const Item = ({ desc }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{desc}</Text>
  </View>
);

const Home = ({navigation, route}) => {

  async function postData(url){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    })

    const json = await response.json();
    return json.Items;
  }

  console.log(postData('http://localhost:3000/usernames'));



  const {email} = route.params;
  const {mode} = route.params;

  const renderItem = ({ item }) => (
    <Item desc={item.desc} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome {email}</Text>
      <FlatList
      data={test_data}
      renderItem={renderItem}
      keyExtractor={item => item.desc}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});

export default Home;

/* commented out code 

*/