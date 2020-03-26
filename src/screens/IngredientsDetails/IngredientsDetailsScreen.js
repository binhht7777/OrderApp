import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { HeaderBackButton } from '@react-navigation/stack'

export default function IngredientsDetailsScreen({navigation}) {
   return (
      <View style={styles.container}>
         <Text>IngredientsDetailsScreen</Text>


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
