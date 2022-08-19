import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListEx = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[ //data is a prop of flatlist!
          {key: 'Devin'},//this data is hardcoded, mostly you will be fetching data from a server
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        //render item is pre designed to take an item from data and render a component 
      />
    </View>
  );
}

export default FlatListEx;