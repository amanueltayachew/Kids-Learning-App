import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'
import Ends from './Ends'

export class Askquestion extends Component {  


/// Answer 314223
/// const [x,setx]=useState(0)
//{this.setState({var:2})}

state={
    text:'',
    x:0,
    correct:null,
    var:0,
    countWrong:0,
    secondscore:true
}
Answer = (A) => {
  
  if(this.props.scoteTrue && this.state.secondscore){
    this.setState({
    text:'',
    x:0,
    correct:null,
    var:0,
    countWrong:0,
    secondscore:false
    })
  }
  
  const { I, q, c1, c2, c3, c4, counter } = this.props.text;
  if(counter==1 && A!=3){this.setState({text:'The correct answer is '+c3,correct:false,var:3})}
  else if(counter==1 && A==3){this.setState({text:'The answer is correct',correct:false,var:3,countWrong:this.state.countWrong+1})}
  if(counter==2 && A!=1){this.setState({text:'The correct answer is '+c1,correct:false,var:1})}
  else if(counter==2 && A==1){this.setState({text:'The answer is correct',correct:false,var:1,countWrong:this.state.countWrong+1})}
  if(counter==3 && A!=4){this.setState({text:'The correct answer is '+c4,correct:false,var:4})}
  else if(counter==3 && A==4){this.setState({text:'The answer is correct',correct:false,var:4,countWrong:this.state.countWrong+1})}
  if(counter==4 && A!=2){this.setState({text:'The correct answer is '+c2,correct:false,var:2})}
  else if(counter==4 && A==2){this.setState({text:'The answer is correct',correct:false,var:2,countWrong:this.state.countWrong+1})}
  if(counter==5 && A!=2){this.setState({text:'The correct answer is '+c2,correct:false,var:2})}
  else if(counter==5 && A==2){this.setState({text:'The answer is correct',correct:false,var:2,countWrong:this.state.countWrong+1})}
  if(counter==6 && A!=3){this.setState({text:'The correct answer is '+c3,correct:false,var:3})}
  else if(counter==6 && A==3){this.setState({text:'The answer is correct',correct:false,var:3,countWrong:this.state.countWrong+1})}
  
}
btnStyle = (corr) => {
  if(corr==this.state.var){
     this.state.var=0
    return{
      backgroundColor:'green'
    }
     }

  
}

    
  render() {
    //  quastion=this.props.text.q
    const { I, q, c1, c2, c3, c4, counter } = this.props.text;
    if(this.props.question){
    return (
      <View style={styles.Container}>
        <Image 
                style={styles.cStyle} 
                source={I}
                resizeMethod='resize'
                resizeMode='cover'
              />         
        <Text style={styles.sText}>{q}</Text>
        <TouchableOpacity style={[styles.as,this.btnStyle(1)]} onPressIn={()=>this.Answer(1)} >{c1}</TouchableOpacity>
        <TouchableOpacity style={[styles.as,this.btnStyle(2)]} onPress={()=>this.Answer(2)}>{c2}</TouchableOpacity>
        <TouchableOpacity style={[styles.as,this.btnStyle(3)]} onPress={()=>this.Answer(3)}>{c3}</TouchableOpacity>
        <TouchableOpacity style={[styles.as,this.btnStyle(4)]} onPress={()=>this.Answer(4)}>{c4}</TouchableOpacity>
        <Text>{this.state.text}</Text>
        <TouchableOpacity style={styles.next} onPress={this.props.varSetter()}>Next</TouchableOpacity>

      </View>
    )}
  else if(this.props.ends){
      return (
      <View style={styles.sCont}>
      <View style={styles.s}>
        <Ends
        endSetter={this.props.endSetter()}
        startAgain={this.props.startAgain()}
        Wrong= {this.state.countWrong}  
        scoteTrue={this.props.scoteTrue}     
        />
      </View>
      </View>
      )
    }
  }
}
  

export default Askquestion
const styles =StyleSheet.create({
  image:{
    flex:1,
  },
  sCont:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',//#3e3e3e
  },
  s:{
    alignSelf:'center',
    color:'lightblue',
    height:'95%',
    width:440,//25    
},
  cStyle:{
    width:350,
    height:280,
    margin:10,
    padding:30,
    borderRadius:55,  
   },
    next:{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center',
      width:150,
      height:35,
      backgroundColor:'#6495ED',
      borderRadius:20,
      marginTop:10
      

    },
    as:{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center',
      borderColor:'lightblue',
      borderWidth:3,
      borderRadius:25,
      height:45,
      width:320,
      margin:5,
      fontFamily:'Fantasy',
      color:'#5F9EA0'  
    },
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      margin: 10,
      backgroundColor:'white', 
      borderStyle:'solid',
    borderWidth:1,
    borderColor:'red',
    borderRadius:55,   
    },
    sText:{
      color:'#5F9EA0',
      fontSize:22,
      fontStyle:'italic',
      fontFamily:'Fantasy'
    }

})