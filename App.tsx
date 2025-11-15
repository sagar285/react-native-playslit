import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  const imgurl  ="http://images.unsplash.com/photo-1760243790660-a7958d7843ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
  return (
    <View style={styles.View}>
      {/* <Text style={[styles.text,{color:"red",fontSize:20}]}>App</Text> */}
      <Image
      source={require("./img.png")} // local image
      style={{width:300,height:300,objectFit:"contain"}} 
      />

      <Image // img from url
      source={{uri:imgurl}} // local image
      style={{width:300,height:300,objectFit:"contain"}} 
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
View:{
  display:"flex",
  flex:1,
  justifyContent:"center",
  alignItems:"center", 
  flexDirection:"row",
  backgroundColor:"black"
},
text:{
  textAlign:"center"
}
})