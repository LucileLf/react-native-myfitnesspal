import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';


const foodItems = [
  {
  label: "Pizza",
  servingSize: 100,
  servingSizeUnit: "grams",
  brand: "Dominos",
  cal: 180,
},
{
  label: "Apple",
  servingSize: 100,
  servingSizeUnit: "grams",
  brand: "Dominos",
  cal: 54,
}
]



export default function App() {

  const [searchInput, setSearchInput] = useState('');

  const performSearch = () => {
    console.warn("searching for: ", searchInput);
    setSearchInput("")
  }
  return (
    <View style={styles.container}>
      <TextInput value={searchInput} onChangeText={setSearchInput} placeholder='Search...' style={styles.input}/>
      <Button title='Search' onPress={performSearch}/>

      <FlatList
        data={foodItems}
        renderItem={({item})=> <FoodListItem item={item}/>}
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

  }
});
