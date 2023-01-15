import React, { Component } from 'react'
import { View,StyleSheet,Image,Text } from 'react-native'
export default class IncomingCall extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.subCont1}>
            <View style={styles.subCont11}>
                <Image source={require('../assets/person_icon.png')}
                style= {styles.myImage}/>
                <Text style= {styles.myText}>Steven</Text>
            </View>
          </View>
          <View style={styles.subCont2}>
            <View style={styles.subCont21}>
                <Text style= {styles.myText2}>Accept</Text>
            </View>
            <View style={styles.subCont22}>
                <Text style= {styles.myText2}>Decline</Text>
            </View>
            <View>
                <Text style={styles.bold}>I'm bold!</Text>
                <Text style={styles.italic}>I'm italic!</Text>
                <Text style={styles.underline}>I'm underlined!</Text>
            </View>
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
})
const styles1 = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex:1,
        flexDirection:'column',
    },
    myImage:{
        width:150,
        height:150,
        alignSelf:'center',
        borderRadius:75,
        borderColor:'white',
        borderWidth:3
    },
    myText:{
        fontSize:30,
        color:'white',
        alignSelf:'center' 
    },
    myText2:{
        fontSize:15,
        color:'white',
        alignSelf:'center' 
    },
    subCont1:{
        backgroundColor:'black',
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    subCont11:{
        backgroundColor:'black',
        width:150,
        height:150,
        alignSelf:'center',
        position:'absolute',
        top:70,
    },
    subCont2:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'center',
    },
    subCont21:{
        backgroundColor:'rgb(19,168,15)',
        width:100,
        height:100,
        alignSelf:'flex-start',
        position:'absolute',
        top:70,
        left:30,
        borderRadius:100,
        justifyContent:'center',
    },
    subCont22:{
        backgroundColor:'rgb(251,3,4)',
        width:100,
        height:100,
        alignSelf:'flex-end',
        position:'absolute',
        top:70,
        right:30,
        borderRadius:100,
        justifyContent:'center',
    },    
})