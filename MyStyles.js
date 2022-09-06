import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        paddingTop: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 20
      },
      secondary_text:{
        paddingTop:20,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 15
      },
      textinput: {
        height: 40,
        margin: 12,
        width: '60%',
        borderWidth: 1,
        padding: 10
      },
      pressable: {
        width: '30vw',
        padding: 10,
        border: '1px solid #2E8B57',
        borderRadius: 25,
        margin: 10,
      },
      pressable_text: {
        color: '#2E8B57',
        fontSize: 20,
        textAlign: 'center'
      }, 
      mvp_text: {
        color: '#2E8B57',
        fontSize: 20
      }
});