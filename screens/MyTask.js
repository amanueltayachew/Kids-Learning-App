import React,{useState} from 'react';
import {ScrollView, Text, View,StyleSheet,Button} from 'react-native';
export default function MyTask() {
    
    const [taskList, setTaskList]=useState(["Send an eamil from array",
        "Read article from 10",
        "Read article from 20",
        "Read article from 30",
    ])
let addTask=(newTask)=>{
    alert(newTask);
    let newTaskLIst=[newTask, ...taskList];
    setTaskList(newTaskLIst);
}

  return (
    <ScrollView style={styles.container}>        
        {
            taskList.map((item)=>(
                <View style={styles.taskCont}>
                    <Text style={styles.taskText}>{item}</Text>
                    <Button title={"Delete-" } 
                        
                    />
                </View>
            ))
        }
        <View style={styles.taskCont}>
            <Button 
                title={"Add New Task"} 
                onPress={()=>
                    addTask("New task-1")
                
                }
             />
        </View>
        
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    taskCont:{
        flex:1,
        height:100,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
    taskText:{
        color:'white',
        fontSize:40,
        margin:10,
    }
});
