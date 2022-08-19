import { StyleSheet } from 'react-native';

const random = () => Math.floor(Math.random() * 255);

export default StyleSheet.create({
    one: {
      color: `rgb(${random()}, ${random()}, ${random()})`, // <--
      },
    wordCloudContainer: {
      paddingHorizontal: 20,
      textAlign: 'center'
    }
});