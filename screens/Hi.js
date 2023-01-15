import React, {Component} from 'react';
import { View, Text } from 'react-native';
export default class Hi extends Component {
    
    state={
        noOfItems:0,
        name:''
    }
    updateCart=(itemNumber)=>{
        this.setState({noOfItem:itemNumber});
    }
    render(){
        return (
            <View>
                <Text>Hi {this.props.name} </Text>
            </View>
        );
    }
}
