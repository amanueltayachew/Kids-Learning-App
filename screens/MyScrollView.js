import React ,{useState}from 'react';
import {View, Text,ScrollView,StyleSheet,RefreshControl,TextInput, Button} from 'react-native';
export default function MyScrollView() {
    const [taskTitle, setTaskTitle]=useState("Hello");
    const [Items, setItems]=useState([
        {key:1,item:'Item 1'},
        {key:2,item:'Item 2'},
        {key:3,item:'Item 3'},
    ]); 
    const [Refreshing, setRefreshing]=useState(false);
    const onRefresh=()=>{
        setRefreshing(true);
        setItems([...Items, {key:15,item:'Item 15'}]);
        setRefreshing(false);
    }
    const addTask=()=>{
        let itemCopy=[...Items, {key:16, item:taskTitle}];
        setItems(itemCopy);
    }
  return (
      <View>
        <View style={styles.header}>
            <Text>List of Tasks: {taskTitle}</Text>
            <TextInput defaultValue={taskTitle} 
                style={styles.input}placeholder={'Enter task title'}
                onChangeText={(val)=>setTaskTitle(val)}    
            />
            <Button style={styles.myButton} title={'Add Task'} onPress={addTask}/>
        </View>
        <ScrollView 
            style={styles.body}
            // horizontal={false} 
            pagingEnabled={false} 
            // stickyHeaderIndices={[1]}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                    colors={['#ff00ff']}
                />
            }
            >
            {
                Items.map((obj)=>{
                    return (
                        <View style={styles.item} key={obj.key}>
                            <Text style={styles.text}>{obj.item}</Text>
                        </View>
                    )
                })
            }
            
        </ScrollView>
      </View>
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