import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function IngredientScreen({navigation}) {

   return (
      <View style={styles.container}>
         <Text> IngredientScreen </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center"
   }
})
