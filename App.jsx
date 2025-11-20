import { Alert, Image, TextInput, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const imgurl =
    'http://images.unsplash.com/photo-1760243790660-a7958d7843ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D';
  const [inputText,setinputtext] =useState()


  const onPressFunction = () =>{
    console.log("pressable function")
    Alert.alert("pressable function")
  }

  
  const onPressButton = () =>{
 Alert.alert("button function")
  }
  const onLoginPressButton = () =>{
 Alert.alert("onLoginPressButton function")
  }
  return (
    <View style={styles.View}>
      {/* <Text style={[styles.text,{color:"red",fontSize:20}]}>App</Text> */}
      {/* <Image
      source={require("./img.png")} // local image
      style={{width:300,height:300,objectFit:"contain"}} 
      />
      <Image // img from url
      source={{uri:imgurl}} // local image
      style={{wid<th:300,height:300,objectFit:"contain"}} 
      /> */}

      <View style={styles.Inputview}>
        {/* <TextInput 
        style={styles.textInput}
        placeholder='Enter any placeholder'
        // readOnly={true}
        placeholderTextColor={"red"} 
        value={inputText}
        onChangeText={(text) => setinputtext(text)}
       keyboardType='number-pad'
        /> */}

        <View style={{marginTop:12}}/>
      </View>

      <Pressable onPressOut={onPressButton} onLongPress={onLoginPressButton}>
  <Text>I'm pressable!</Text>
</Pressable>
      {/* <Button 
      onPress={onPressButton}
        title='Button sUBMIT'
        /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  View: {
    display: 'flex',
    // flex:1,
    // justifyContent:"center",
    alignItems: 'center',
    // flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  Inputview: {
    backgroundColor: 'white',
    borderColor:"black",
    borderWidth:1,
  },
  textInput:{
   width:300,
   height:100,
   color:"blue"
  },
  text: {
    // textAlign:"center"
  },
});
