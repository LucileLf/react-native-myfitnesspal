import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type Item = {
  label: string;
  servingSize: number;
  servingSizeUnit: string;
  brand: string;
  cal: number
}


interface FoodListItemProps {
  item: Item;
}

const FoodListItem = ({item}: FoodListItemProps) => {
  return (
    <View style={styles.foodListItemContainer}>

      <View style={{flex: 1, gap: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{color: 'dimgray'}}>{item.nutrients.ENERC_KCAL} cal{item.brand && `, ${item.brand}` }</Text>
      </View>

      <AntDesign name='pluscircleo' size={24} color='royalblue' />

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
