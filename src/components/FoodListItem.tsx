import React from 'react'
import {Text, View, StyleSheet, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'expo-router'

// type Item = {
//   label: string;
//   brand: string;
//   nutrients: {ENERC_KCAL: number}
// }


// interface FoodListItemProps {
//   item: Item;
// }



const mutation = gql`
  mutation MyMutation($food_id: String!, $kcal: Int!, $label: String!, $user_id: String!) {
    insertFood_log(food_id: $food_id, kcal: $kcal, label: $label, user_id: $user_id) {
      created_at
      food_id
      id
      kcal
      label
      user_id
    }
  }
`

const FoodListItem = ({item}) => {
  const [ logFood, {data, loading, error} ]= useMutation(mutation, {
    // options
    refetchQueries: [ // invalidate query so the food log includes new item
      // GET_POST, // DocumentNode object parsed with gql
      'foodLogsForDate' // Query name
    ],
  })
  const router = useRouter();

  const onPlusPressed = async () => {
    console.log(`onplluspressed - adding ${item.label}`);

    await logFood({
      variables: {
        food_id: item.foodId,
        kcal: item.nutrients.ENERC_KCAL,
        label: item.label,
        user_id: "dabdoubeh"
      }
    })
    router.back();
  }

  return (
    <View style={styles.foodListItemContainer}>

      <View style={{flex: 1, gap: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{color: 'dimgray'}}>{item.nutrients.ENERC_KCAL} cal{item.brand && `, ${item.brand}` }</Text>
      </View>

      <AntDesign  onPress={onPlusPressed} name='pluscircleo' size={24} color='royalblue' />

  </View>


  )
}

const styles = StyleSheet.create({
  foodListItemContainer: {
    backgroundColor: '#f6f6f8',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FoodListItem
