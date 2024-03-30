import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, ActivityIndicator } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import {gql, useLazyQuery } from '@apollo/client'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera'

const query = gql`
  query search($ingr: String, $upc: String) {
    search(ingr: $ingr, upc: $upc) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`

export default function SearchScreen() {
  const [searchInput, setSearchInput] = useState('');
  // const [scannedCode, setScannedCode] = useState('')

  const [scannerEnabled, setScannerEnabled] = useState(false)

  // send request to graphQL
  const [runSearch ,{data, loading, error}] = useLazyQuery(query)

  const [permission, requestPermission] = Camera.useCameraPermissions();
  // console.log(permission)
  requestPermission()

  const performSearch = () => {
    // console.warn("searching for: ", searchInput);
    runSearch({variables: { ingr: searchInput }});
    setSearchInput("")
  }

  if (error) {
    return <Text>Failed to search </Text>
  }

  if (scannerEnabled) {
    return (
      <View>
        <Camera
          style={{ width: '100%', height: '100%' }}
          onBarCodeScanned={(data)=> {
            console.log(data);
            runSearch({variables: {upc: data.data}})
            setScannerEnabled(false);
          }}

        />
        <AntDesign onPress={() => setScannerEnabled(false)} name="close" size={30} color="black" style={{position: 'absolute', right: 10, top: 10}}/>
      </View>
    )
  }

  const searchResults = data?.search?.hints || []
  // console.log('searchResults', searchResults);


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center',gap: 10}}>
        <TextInput value={searchInput} onChangeText={setSearchInput} placeholder='Search...' style={styles.input}/>
        <MaterialCommunityIcons onPress={() => setScannerEnabled(true)} name="barcode-scan" size={32} color="black" />

      </View>
      <Button title='Search' onPress={performSearch}/>

      {loading && <ActivityIndicator/>}
      <FlatList
        data={searchResults}
        renderItem={({item})=> <FoodListItem item={item.food}/>}
        ListEmptyComponent={() => <Text>Search a food</Text>} // render when there is no data
        contentContainerStyle={{gap: 5}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    flex: 1
  }
});
