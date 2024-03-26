import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';


const pizza = {
  label: "Pizza",
  servingSize: 100,
  servingSizeUnit: "grams",
  brand: "Dominos",
  cal: 180,
}



export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem item={pizza}/>
      <FoodListItem item={pizza}/>
      <FoodListItem item={pizza}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
