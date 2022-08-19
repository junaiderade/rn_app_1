import React, { useState } from 'react';
import {Text, View, Button } from 'react-native';


const ButtonEx = (props) => {
    const [swagOn,setSwag] = useState(false)
    return(
      <View>
        <Text style={{fontWeight: 'bold'}}>Button Example Below</Text>
        <Text>{props.name} Yolo {swagOn ? "Swag": ""}</Text> 
        {/* you use props for data that does not change and you use state for data which can change */}
        <Button
          onPress={() => {
            setSwag(!swagOn)
          }}
          title = {swagOn ? "swag off" : "swag on"}
          />
      </View>
    )
  }

  export default ButtonEx;