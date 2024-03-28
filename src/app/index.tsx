import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, ActivityIndicator } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import {gql, useLazyQuery } from '@apollo/client'

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
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



export default function SearchScreen() {

  const [searchInput, setSearchInput] = useState('');

  // send request to graphQL
  const [runSearch ,{data, loading, error}] = useLazyQuery(query)

  const performSearch = () => {
    console.warn("searching for: ", searchInput);
    runSearch({variables: { ingr: searchInput }});
    setSearchInput("")
  }

  if (error) {
    return <Text>Failed to search </Text>
  }


  const searchResults = data?.search?.hints || []
  console.log('searchResults', searchResults);

  return (
    <View style={styles.container}>
      <TextInput value={searchInput} onChangeText={setSearchInput} placeholder='Search...' style={styles.input}/>
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

  }
});
