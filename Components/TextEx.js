import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const TextEx = () => {
    const [text, setText] = useState('');

    return (
        <View style={{padding: 10}}>
            <Text style={{fontWeight: 'bold'}}>Text Example Below</Text>
            <TextInput
                style={{height:40}}
                placeholder="Type to change every word to swag"
                onChangeText={newText =>setText(newText)} 
                // text is stored in the state because it changes over time
                defaultValue={text}
            />
            <Text>
                {text.split(' ').map((word) => word && 'swag').join(' ')}
            </Text>
        </View>
    )
}

export default TextEx;