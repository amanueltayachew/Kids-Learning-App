import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text,RefreshControl} from 'react-native';
export default function MyFlatList() {
    const [Items, setItems]=useState([
        {name:'Item 1'},
        {name:'Item 2'},
        {name:'Item 3'},
    ]); 
    const [Refreshing, setRefreshing]=useState(false);
    const onRefresh=()=>{
        setRefreshing(true);
        setItems([...Items, {name:'Item 105'}]);
        setRefreshing(false);
    }
  return (
    <FlatList
        style={styles.body}
        // horizontal={false}
        // numColumns={2}
        // inverted={false}
        keyExtractor={(item, index)=>index.toString()}
        data={Items}
        renderItem={({item})=>(
            <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )}
        refreshControl={
            <RefreshControl
                refreshing={Refreshing}
                onRefresh={onRefresh}
                colors={['#ff00ff']}
            />
        }
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