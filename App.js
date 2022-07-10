/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
 
   StyleSheet,
   Text,
   Button,
   View,
   TextInput,
   Pressable,
   Alert,

   ImageBackground
 } from 'react-native';
 
 
 const App = () => {
  const [celsius, SetCelsius] = React.useState(0)
const[thank,setThank]=React.useState('')
 const[kelvin,setKelvin]=React.useState(0)
  const[FahrenheitButton,setFahrenheitButton]=React.useState('t')
  
  const[Fahrenheit,setFahrenheit]=React.useState(0)
 

function onPressFahrenheit(){
  setFahrenheit(+celsius * (9 / 5) + 32);
  setKelvin(+celsius+273.15)
  setFahrenheitButton('f')

}


return (
  <>

      <ImageBackground
      style={styles.body}
      source={require('./assets/Cleisus1.png')
    }
    resizeMode='stretch'>
          <TextInput
        style={styles.input}
        placeholder='e.g. 10'
        onChangeText={(value) => SetCelsius(value)}
        keyboardType='numeric'
        />
          
      <Pressable
         onPress={onPressFahrenheit}
         
         android_ripple={{color:'#FFAC4A'}}
         style={styles.button}
      >
        <Text style={styles.text}>
     Convert
        </Text>
      </Pressable>

      </ImageBackground>

{FahrenheitButton =='f' ? 
<>
<ImageBackground
style={styles.body1}
source={require('./assets/Fahrenheit.png')
}
resizeMode='stretch'>
<Pressable style={styles.buttonf}>
  <Text style={styles.textF}>
    {Fahrenheit}
  </Text>
</Pressable> 
</ImageBackground>
<ImageBackground
style={styles.body1}
source={require('./assets/Kelvin.png')
}
resizeMode='stretch'>
<Pressable style={styles.buttonf}>
  <Text style={styles.textF}>
    {kelvin}
  </Text>
</Pressable> 
</ImageBackground>

</>
 :
 null
}
    </>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
flex:1,
     backgroundColor: '#fff',
   },
   body1:{
flex:1,
    
   },
   item: {
     margin: 10,
     backgroundColor: '#4ae1fa',
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 24,
     fontStyle:'italic',
    fontFamily:'Sans-serif',
   
     color: '#fff',

   },
   textF:{
   
    fontSize:25,
    color:'#fff'

   },
   input: {
 width:180,
 borderWidth:3,
 borderColor:'#000',
 borderRadius:10,
 textAlign:'center',
 fontSize:20,
marginTop:380,
marginStart:35,
backgroundColor:'#fff'
   },
   button: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:20,
    marginStart:50,
    marginTop:15,
    backgroundColor: '#FFAC4A'
  
   
  },
  buttonf:{
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:20,
    marginStart:30,
    marginTop:120,
    backgroundColor:'#000',
    borderWidth:3,
    borderColor:'#000',
    borderRadius:10,
  }
 });
 
 export default App;
 