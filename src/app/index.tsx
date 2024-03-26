import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../components/FoodListItem';


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
  return (
    <View style={styles.container}>
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
    padding: 10
  },
});
