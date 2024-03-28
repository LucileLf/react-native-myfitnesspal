import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import FoodListItem from '../components/FoodListItem'


const foodItems = [
  {
  label: "Pizza",
  brand: "Dominos",
  nutrients: {ENERC_KCAL: 180} ,
},
{
  label: "Apple",
  brand: "Dominos",
  nutrients: {ENERC_KCAL: 54} ,
}
]


export default function HomeScreen() {
  return(
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Calories</Text>
        <Text>1770 - 365 = 1692</Text>
      </View>


      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Food diary</Text>
        <Link href='/search' asChild>
          <Button title='ADD FOOD' />
        </Link>
      </View>
      <FlatList
      data={foodItems}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item })=> <FoodListItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    gap: 10
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    color: 'dimgray'
  }
})
