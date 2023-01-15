import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function MyFirtsView() {
  return (
      <View style={styles.container1}>
        <View style={styles.container11}>
            <Text style={styles.first}>Blue</Text>
        </View>
        <View style={styles.container12}>
            <Text style={styles.first}>Green</Text>
        </View>
        
      </View>

  );
}

const styles = StyleSheet.create({
    container1:{
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
        // alignItems:'center',
        flex:1
    },
    container11:{
        // flex:2,
        backgroundColor:'blue',
        width:100,
        height:100,
        alignSelf:'flex-start',
        top:20,
        left:20,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',

    },
    container12:{
        // flex:1,
        backgroundColor:'green',
        width:100,
        height:100, 
        alignSelf:'flex-end',
        top:20,
        right:20,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
    },
    first:{
        color:'white',
        fontSize:25,
    },
    second:{

    }
    
})