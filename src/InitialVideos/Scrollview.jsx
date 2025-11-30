import { StyleSheet, Text, View,ScrollView, Image,Dimensions,RefreshControl } from 'react-native'
import React, { useState } from 'react'

const img1 = "https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
const img2 = "https://plus.unsplash.com/premium_photo-1762487283482-840943bd5180?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
const img3 = "https://images.unsplash.com/photo-1763669029223-74f911a9e08b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
const arrayofimages =[img1,img2,img3,img1,img2,img3,img1]
const {width} =Dimensions.get("window")
const App = () => {
  const [handlerefreshing,setrefreshing] =useState(false)
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    // contentContainerStyle={{ width:300,padding:30}}
    refreshControl={
      <RefreshControl refreshing={handlerefreshing} onRefresh={()=>setrefreshing(true)}/>
    }
    >
      {
      arrayofimages.map((item)=>(
        <Image
        source={{uri:item}}
        style={{width:width,height:200}}
        />
      ))
      }
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})