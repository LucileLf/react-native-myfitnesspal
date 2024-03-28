import { View, Text, FlatList, Button } from 'react-native'
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
    <View style={{ backgroundColor: 'white', flex: 1, padding: 10, gap: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '500', flex: 1, color: 'dimgray'}}>Food diary</Text>
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
