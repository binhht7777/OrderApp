import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Icon, TouchableOpacity, Image } from 'react-native'

import { HeaderBackButton } from '@react-navigation/stack'


export default function HomeScreen({ navigation }) {
   navigation.setOptions({
      headerLeft: () => (
         <TouchableOpacity
            onPress={() =>
               navigation.navigate("RecipesList", { name: "Screen RecipesList" })
            }
         >
            <Image source={require('../../../assets/icons/Menu30.png')}></Image>
         </TouchableOpacity>

      ),
   })

   return (
      <View style={styles.container}>
         <Text>Home Screen</Text>
         <Button
            title="Go To Recipe"
            onPress={() => navigation.navigate("Recipe", { name: "Screen Recipe" })}
         />

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center"
   }
})
