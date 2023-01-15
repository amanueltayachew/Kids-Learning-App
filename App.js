import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React,{useState} from 'react'
import Askquestion from './compnents/Askquestion';
import Starts from './compnents/Starts';
import Ends from './compnents/Ends';

const App = () => {
  
  const [count,setCount]=useState(2)
  const [bools,setbools]=useState(true)
  const [boolq,setboolq]=useState(false)
  const [boole,setboole]=useState(false)
  const [T,setT]=useState(false)
  const [Exitbtn,setExitbtn]=useState(false)
  const [scoteTrue,setscoteTrue]=useState(false)
  const [Items,setItems]=useState(
         {
            I:require('./assets/Lion.jpg'),
            q:'What animal is it?',
            c1:'dog',
            c2:'cat',
            c3:'mouse',
            c4:'Lion',
            counter:1
 
        }
    );
    
    const varSetter=()=>{
      setscoteTrue(true)
      if(count==2){
        setItems(
            {
                I:require('./assets/Ant.jpg'),
                q:'Where is this place founds?',
                c1:'Adiss Abeba',
                c2:'Vegas',
                c3:'London',
                c4:'Monbaye',
                counter:2
     
            }
           )
           setCount(3)
    }
    if(count==3){
      setItems(
          {
              I:require('./assets/Zebra.jpg'),
              q:'Father of Physics is this place founds?',
              c1:'Albert',
              c2:'Nati',
              c3:'Newton',
              c4:'Laws',
              counter:3
   
          }
         )
         setCount(4)
  }
  if(count==4){
    setItems(
        {
            I:require('./assets/Eye.jpg'),
            q:'What is my name?',
            c1:'Abeba',
            c2:'chelfa',
            c3:'tota',
            c4:'mitmita',
            counter:4
 
        }
       )
       setCount(5)
}
if(count==5){
  setItems(
      {
          I:require('./assets/Orange.jpg'),
          q:'Who is the best rapper?',
          c1:'Kanye West',
          c2:'Kendric lamar',
          c3:'Dr Dre',
          c4:'Eminem',
          counter:5

      } 
     )
     setCount(6)
}
if(count==6){
  setItems(
      {
          I:require('./assets/Lion.jpg'),
          q:'Where is this place founds?',
          c1:'Adiss Abeba',
          c2:'Vegas',
          c3:'London',
          c4:'Monbaye',
          counter:6

      }
     )  
   setCount(7)
  }

if(count==7){
  setbools(false)
  setboolq(false)
  setboole(true)
  setT(true) 
   }
    
  }

    const endSetter=()=>{
      setboole(false)
      setT(false)
      setExitbtn(true)
   }
  
  const startAgain= ()=>{
    setItems({
      I:require('./assets/Lion.jpg'),
      q:'What animal is it?',
      c1:'dog',
      c2:'cat',
      c3:'mouse',
      c4:'Lion',
      counter:1

  })
  setCount(2)
  setscoteTrue(true)
  setbools(false)
  setboole(false)
  setboolq(true)
  setT(true)
    
}

  const boolSsetter= ()=>{
        setbools(false)
        setboole(false)
        setboolq(true)
        setT(true)
  }

    if(boolq || T){
  return (
    <View style={styles.sCont}>
    <View style={styles.s}>
        <Askquestion 
        varSetter={()=>varSetter}
        endSetter={()=>endSetter}
        startAgain={()=>startAgain}  
        scoteTrue={scoteTrue}    
        text={Items}
        starts={bools}
        question={boolq}
        ends={boole}
        />
    </View>
    </View>
             
  )}
  else if(bools){
    return (
      <View style={styles.sCont}>
      <View style={styles.s}>
        <Starts boolSsetter={()=>boolSsetter()}/>
      </View>
      </View>            
    )}
  else if(Exitbtn){
    return (
      <View style={styles.sCont}>
      <View style={styles.s1}>
      </View>
      </View>    
      )}
}

export default App

const styles = StyleSheet.create({
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
  s1:{
    alignSelf:'center',
    color:'lightblue',
    height:'95%',
    width:440,//25 
    backgroundColor:'white',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:45, 
  },
})
/**
 boolSsetter={this.props.boolSsetter()} 
 
        boolSsetter={()=>boolSsetter()}  

      <ImageBackground 
        source={require('./backgoundOIP.jpg')} 
        style={styles.image} 
        ></ImageBackground>
 */
/**
 *  borderStyle:'solid',
    borderWidth:1,
    borderColor:'red',
    borderRadius:200,

 const setBools=(x,y)=>{
      if(x==1 && y==2){
        setBools(false)
        setboolq(false)
        setboole(true)
      }
      else if(x==1 && y==3){
        setBools(false)
        setboolq(true)
        setboole(false)
      }
      else if(x==2 && y==3){
        setBools(true)
        setboolq(false)
        setboole(false)
      }
    }
 */