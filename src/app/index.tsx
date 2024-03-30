import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { Link } from 'expo-router'
import FoodLogListItem from '../components/FoodLogListItem'
import { gql, useQuery } from '@apollo/client'
import dayjs from 'dayjs'

const query = gql`
  query foodLogsForDate($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      label
      kcal
    }
  }
`

// const foodItems = [
//   {
//   label: "Pizza",
//   brand: "Dominos",
//   nutrients: {ENERC_KCAL: 180} ,
//   },
//   {
//     label: "Apple",
//     brand: "Dominos",
//     nutrients: {ENERC_KCAL: 54} ,
//   }
// ]


export default function HomeScreen() {
  const user_id = 'dabdoubeh';
  const { data, loading, error } = useQuery(query, {
    variables: {
      date: dayjs().format('YYYY-MM-DD'),
      user_id,
    },
  })

  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Failed to fetch data</Text>
  }

  console.log(data.foodLogsForDate);
  const foodItems = data.foodLogsForDate;

  let kCalArray = []
  foodItems.map((item)=>kCalArray.push(item.kcal));
  const totalKcal = kCalArray.reduce((acc, current) => acc + current, 0);
  console.log(totalKcal);

  return(
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Calories</Text>
        <Text>1770 - 365 = 1692</Text>
      </View>


      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Today's food</Text>
        <Link href='/search' asChild>
          <Button title='ADD FOOD' />
        </Link>
      </View>

      <FlatList
      data={foodItems}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item })=> <FoodLogListItem item={item}/>}
      />

      <Text>TOTAL: {totalKcal} cal</Text>

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
