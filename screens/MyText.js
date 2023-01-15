import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class MyText extends Component {
  render() {
    return (
      <View style={styles.container}> 
          <Text style={styles.title}>{this.props.username}</Text>
          {/* <Text>Exercise:1</Text>
          <Text>Name: Medhanit Alemayehu</Text>
          <Text>Age: 23</Text>
          <Text>School: INformation Science</Text> */}

      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      // justifyContent:'center',
      
    },
    title:{
      fontSize:50,
    }
})