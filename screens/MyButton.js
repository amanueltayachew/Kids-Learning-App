import React, { Component } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default class MyButton extends Component {
  render() {
    return (
      <View>
          <Button 
            title="Login"
            color="red"
            disabled={false}
            onPress={()=> alert("Button pressed!")}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    myButton:{
        color:'blue',
        fontSize:40,
        width:100,

    }
})