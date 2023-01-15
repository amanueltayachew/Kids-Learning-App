import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function MyTextInput() {
  return (
    <View>
        <TextInput 
            style={styles.input}
            placeholder={"Enter your email"}
            multiline={false}
            maxLength={10}
            keyboardType={'email-address'}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    input:{
        borderWidth:0,
        borderColor:'red',
        width:500,
        padding:10, 
        margin:10,
    },
});
