import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function SearchScreen({ navigation }, { props }) {
   return (
      <View style={styles.container}>
         <Text> SearchScreen </Text>
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
