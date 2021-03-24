import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


function Insta ({ instaUsers }) { 
  const [Liked, setLikeState] = useState(false);
  return(
    <SafeAreaView style={styles.container}>
        
        <View style={{ flexDirection: 'row',
         padding: 15,
         paddingTop: 35,
         alignItems: 'center'
         }}>
         
        <Image 
          style={{
            marginRight: 15,
            width: 60,
            height: 60,
            borderRadius:50
        }}
        
        source={{
          uri: `https://github.com/${instaUsers}.png`
        }}/>

      <Text>{instaUsers}</Text>
      </View>
      
        <Image 
        style={{
          width: '100%',
          height: 350,
        }}
        source={{
          uri: `https://github.com/${instaUsers}.png`
        }}/>
      <View style={{ flexDirection: 'row',
         padding: 15,
         paddingTop: 35,
         alignItems: 'center'
         }}>
        <Text>
        
        <TouchableOpacity onPress={() => setLikeState(!Liked)}>
          {Liked && <AntDesign name="heart" size={24} color="red" />}
          {!Liked && <AntDesign name="hearto" size={24} color="black" />}
          
          </TouchableOpacity>  
        
        </Text>
      </View>
    </SafeAreaView>
  );   
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {
      [
      'PedroTrudes',
      'omariosouto',
      'vweberfroes',
      'gabrielfroes'
      ].map((instaUsers) =>
      <Insta Key={instaUsers} instaUsers={instaUsers} />
      )
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
