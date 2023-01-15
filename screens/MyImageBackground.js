import React from 'react';
import { ImageBackground,Text,StyleSheet } from 'react-native';

export default function MyImageBackground() {
    
  return (
    <ImageBackground 
        source={require('../assets/minilik1.jpg')} 
        style={styles.image} 
        >
        <Text style={styles.text}>King Minilik-II</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
    image:{
        flex:1,
        // width:300,
        // height:200,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:32,
        letterSpacing:12,
        // fontFamily:'Helvetica',
        fontWeight:'bold',
        padding:30,
        margin:30,
    },
    
});
