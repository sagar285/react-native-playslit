import { StyleSheet, Text, View,FlatList,StatusBar,TouchableOpacity,Image,ActivityIndicator } from 'react-native'
import React, { useState,useRef } from 'react'
const POST_HEIGHT = 250;
const REEL_HEIGHT = 400;


const App = () => {

  const [selectedId, setSelectedId] = useState();
  const [refereshing, setrefdreshing] = useState(false);

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
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '5 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '6 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '7 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '8 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '9 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '9 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '9 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '9 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '9 Item',
    },
    {
      id: '58694a0f-3da-471f-bd96-145571e29d72',
      title: '9 Item',
    },
  ];


  const FEED = [
    { id: "1", type: "post", title: "Post 1", image: "https://picsum.photos/400" },
    { id: "2", type: "reel", title: "Reel 1", video: "video-url" },
    { id: "3", type: "post", title: "Post 2", image: "https://picsum.photos/401" },
    { id: "4", type: "reel", title: "Reel 2", video: "video-url" },
    { id: "5", type: "post", title: "Post 3", image: "https://picsum.photos/402" },
  ];


  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 100,
  });

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    console.log(viewableItems)
    const ids = viewableItems
      .filter((i) => i.isViewable)
      .map((i) => i.item.id);
    setVisibleIds(ids); // update visible ids
  });


  const renderItem = ({ item }) => {
    const isVisible = visibleIds.includes(item.id);

    if (item.type === "post") {
      return (
        <View style={styles.post}>
          <Text style={styles.title}>POST: {item.title}</Text>

          {isVisible ? (
            <Image
              source={{ uri: item.image }}
              style={{ height: 180, width: "100%", borderRadius: 10 }}
            />
          ) : (
            <View style={styles.placeholder}>
              <ActivityIndicator size="large" color="orange" />
              <Text>Loading image...</Text>
            </View>
          )}
        </View>
      );
    }

    if (item.type === "reel") {
      return (
        <View style={styles.reel}>
          <Text style={[styles.title, { color: "white" }]}>REEL: {item.title}</Text>

          {isVisible ? (
            <View style={styles.videoBox}>
              <Text style={{ color: "white" }}>🎥 Video Playing...</Text>
            </View>
          ) : (
            <View style={styles.placeholder}>
              <ActivityIndicator size="large" color="white" />
              <Text style={{ color: "white" }}>Loading reel...</Text>
            </View>
          )}
        </View>
      );
    }
  };


  const [visibleIds, setVisibleIds] = useState([]);

















  const Item = ({title,id}) => {
    const backgroundColor = id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = id === selectedId ? 'white' : 'black';
   const  onPress=() => setSelectedId(id)
    return(
      <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  
  )}

  
  const itemseparatorcomponent = () =>{
     return <View style={{width:"100%",height:"2%",backgroundColor: selectedId ? "red" : "black"}}/>
  }
  const ListEmptycomponent = () =>{
     return ( <View style={{width:"100%",height:"2%"}}>
      <Text>List empty component render</Text>
     </View>
     )
  }
  const ListFootercompnent = () =>{
     return ( <View>
      <Text style={{textAlign:"center"}}>List ListFootercompnent component render</Text>
     </View>
     )
  }
  const ListHeadercomponent = () =>{
     return ( <View>
      <Text style={{textAlign:"center"}}>List ListHeadercomponent component render</Text>
     </View>
     )
  }

  const onRefresh = () =>{
    setrefdreshing(true)
  }
 
  

  return (
    <View>
     <FlatList
    ListEmptyComponent={ListEmptycomponent}
    // ListFooterComponent={ListFootercompnent}
    // ListHeaderComponent={ListHeadercomponent}
    // ListFooterComponentStyle={{
    //   backgroundColor:"red",
    //   padding:4,
    // }}
    // ListHeaderComponentStyle={{
    //   backgroundColor:"blue",
    //   padding:10,
    // }}
    refreshing={refereshing}
    progressViewOffset={300}
     data={FEED}
     renderItem={renderItem}
     keyExtractor={(i,index)=>index.toString()}
    //  initialNumToRender={4}
    //  initialScrollIndex={5}
    // inverted={true}
    //  numColumns={2}
     contentContainerStyle = {{
      flexGrow:1,
      justifyContent:"center",
      // alignItems:"center",
     }}
     onRefresh={onRefresh}
     extraData={selectedId}
     ItemSeparatorComponent={itemseparatorcomponent}
     viewabilityConfig={viewConfigRef.current}
     onViewableItemsChanged={onViewableItemsChanged.current}

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
  post: {
    height: POST_HEIGHT,
    backgroundColor: "#ffe6e6",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  reel: {
    height: REEL_HEIGHT,
    backgroundColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  placeholder: {
    height: 180,
    borderRadius: 10,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  videoBox: {
    height: 300,
    backgroundColor: "#222",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
});
