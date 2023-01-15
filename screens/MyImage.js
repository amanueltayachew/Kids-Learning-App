import React, { Component } from 'react'
import {View, Image,StyleSheet} from 'react-native';
export default class MyImage extends Component {
  state={
    photo:{
      uri:'https://aau.edu.et/sis/stud1.png',
      width:100,
      height:100
    }
  }
  loginVhangePhoto=()=>{
    this.setState();
  }
  render() {
    return (
      <Image 
        style={styles.myImage} 
        source={require('../assets/guzo_adwa.jpg')}
        resizeMode='stretch'
      />
    )
  }
}

const styles = StyleSheet.create({
    myImage:{
        width:100,
        height:100,
        // borderRadius:100,
        borderWidth:3,
        borderColor:'red',
        margin:30
    },
})