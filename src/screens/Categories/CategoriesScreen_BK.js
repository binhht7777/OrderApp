import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function CategoriesScreen({ navigation }) {

   return (
      <View style={styles.container}>
         <Text> CategoriesScreen </Text>
         <Button
            title="Go To RecipeList"
            onPress={() =>
               navigation.navigate("RecipesList", { name: "Screen RecipesList" })
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
