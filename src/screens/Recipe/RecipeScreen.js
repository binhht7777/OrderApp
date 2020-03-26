import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function RecipeScreen({ navigation }) {
   return (
      <View style={styles.container}>
         <Text> RecipeScreen </Text>
         <Button
            title="Go To IngredientsDetails"
            onPress={() =>
               navigation.navigate("IngredientsDetails", { name: "Screen Ingredient Details" })
            }
         />
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
