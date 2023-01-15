import React, { Component } from 'react';
import {View, Text, Switch,StyleSheet} from 'react-native';
export default class MySwicth extends Component {
    state = {  
        switchValue: false  
    };  
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>{this.state.switchValue ? 'on' :'off'}</Text>  
        <Switch 
            styles={styles.input}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.switchValue ? "red" : "blue"}
            ios_backgroundColor="#3e3e3e"
            onValueChange ={(switchValue)=>this.setState({switchValue})}
            value={this.state.switchValue}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
        color: '#344953'  
    }
})