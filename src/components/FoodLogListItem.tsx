import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

// type Item = {
//   label: string;
//   brand: string;
//   nutrients: {ENERC_KCAL: number}
// }


// interface FoodListItemProps {
//   item: Item;
// }

const FoodLogListItem = ({item}) => {
  return (
    <View style={styles.foodListItemContainer}>

      <View style={{flex: 1, gap: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{color: 'dimgray'}}>{item.kcal} cal</Text>
      </View>

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

export default FoodLogListItem
