import React, {useState} from 'react';
import {SectionList, StyleSheet, View, Text,RefreshControl} from 'react-native';

export default function MySectionList() {
    const taskData=[
        {
            title:'New Task',
            data:['Buy groceries','Feed Cat','Sleep for 3 hours','Water Plants']
        },
        {
            title:'Completed Task',
            data:['Drink Water','Make a section list note','Share this note']
        }
    ]
      
  return (
    <SectionList
        keyExtractor={(item,index)=>index.toString()}
        sections={taskData}
        renderItem={({item})=>(
            <Text style={styles.text}>{item}</Text>
        )}
        renderSectionHeader={({section})=>(
            <View style={styles.item}>
                <Text style={styles.text}>{section.title}</Text>
            </View>
          )}
        stickySectionHeadersEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        borderColor:'red',
        width:'90%',
        padding:5, 
        margin:5,
    },
    item:{
        backgroundColor:'#ff2134',
        justifyContent:'center',
        alignItems:'center',
        margin:10,

    },
    item1:{
        backgroundColor:'#002134',
        justifyContent:'center',
        alignItems:'center',
        margin:10,

    },
    header:{
        width:'100%',
        height:'20%',
        backgroundColor:'white',
    },
    body:{
        width:'100%',
        height:'80%',
        backgroundColor:'white',
    },
    myButton:{
        color:'blue',
        fontSize:25,
        width:100,

    },
    text:{ 
        color:'black',
        fontSize:45,

    },
});