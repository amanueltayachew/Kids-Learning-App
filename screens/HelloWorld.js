import React from 'react';
import {View, Text,StyleSheet} from 'react-native'
export default function HelloWorld(props){
    return (
        <View>
            <Text style={styles.myStyle}>Hello {props.fname} {props.lname} </Text>
            <Text>Hello Ethiopia</Text>
        </View>
    );
}
const styles = StyleSheet.create({
   myStyle:{
       color:'red'
   } 
});