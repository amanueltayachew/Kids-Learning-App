import React, { useState } from 'react';
import {StyleSheet,Text,View,Keyboard,TextInput,Button} from 'react-native';

export default function Form(props) {
  
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [Email, setEmail] = useState('');



  const FHandler = (Fname) => {
    setFName(Fname);
  };
  const LHandler = (Lname) => {
    setLName(Lname);
  };
  const EHandler = (Email) => {
    setEmail(Email);
  };
  

  
  const btnHandler = () => {
    
    setFName('');
    setLName('');
    setEmail('');

    
    Keyboard.dismiss();
  };
  const SHandler = () => {
    alert("submit")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration Form</Text>
      <TextInput
        style={styles.input}
        placeholder={props.plcHld}
        value={Fname}
        onChangeText={FHandler}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Last name"
        value={Lname}
        onChangeText={LHandler}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        value={Email}
        onChangeText={EHandler}
      />
      <View>
      <Button color={props.clr} title={props.ttl} onPress={SHandler} />
  
      <Button  color={props.colr} title={props.ttl1} onPress={btnHandler} />
      
      </View>
      <View style={styles.result}>
        <Text>forget password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 24,
  },
  input: {
    padding: 10,
    marginVertical: 20,
    width: 200,
    fontSize: 18,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  result: {
    marginTop: 30,
    paddingHorizontal: 30,
    display: 'flex',
  }
});