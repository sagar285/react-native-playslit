import { StyleSheet, Text, View,FlatList,StatusBar,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [selectedId, setSelectedId] = useState();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: 'Fourth Item',
    },
  ];
  



  const Item = ({title,id}) => {
    const backgroundColor = id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = id === selectedId ? 'white' : 'black';
   const  onPress=() => setSelectedId(id)
    return(
      <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  
  )}
  

  return (
    <View style={{flex:1, display:"flex",justifyContent:"center",alignItems:"center"}}>
     <FlatList
     data={DATA}
     renderItem={({item}) => <Item title={item.title} id = {item.id} />}
     keyExtractor={(i,index)=>index.toString()}
     numColumns={2}
     contentContainerStyle = {{
      flexGrow:1,
      justifyContent:"center",
      alignItems:"center",
     }}
     extraData={selectedId}
     />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
