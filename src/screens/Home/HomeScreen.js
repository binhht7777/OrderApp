import React, { Component } from 'react'
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import styles from './styles';
import { recipes } from '../../data/dataArrays';
import { HeaderBackButton } from '@react-navigation/stack'
import { getCategoryName } from '../../data/MockDataAPI';
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { render } from 'react-dom';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from '@react-navigation/stack';

import Colors from "../../config/MyColors";
import Fonts from "../../config/MyFonts";
import Icons from "../../config/MyIcons";

export default function HomeScreen({ navigation }, props) {

   navigation.setOptions({
      headerLeft: () => (
         <TouchableOpacity
            onPress={() => { navigation.openDrawer() }}
         >
            <Image source={Icons.icoMenu}></Image>
         </TouchableOpacity>
      ),
      headerRight: () => (
         <TouchableOpacity
            onPress={() =>
               navigation.navigate("Search", { name: "Search" })
            }
         >
            <Image source={Icons.icoSearch}></Image>
         </TouchableOpacity>
      ),
   })


   function onPressRecipe(item) {
      navigation.navigate('Recipe', { item })
   };

   function renderRecipes({ item }) {
      return (
         <TouchableHighlight underlayColor='gray' onPress={() => onPressRecipe(item)}>
            <Card>
               <CardItem>
                  <Left>
                     <Thumbnail source={{ uri: item.photo_url }} />
                     <Body>
                        <Text style={{ fontFamily: Fonts.fontTitle, fontSize: 23 }}>{item.title}</Text>
                     </Body>
                  </Left>
               </CardItem>
               <CardItem cardBody>
                  <Image source={{ uri: item.photo_url }} style={{ height: 480, width: null, flex: 1 }} />
               </CardItem>
               <CardItem >
                  <Left >
                     <Text style={{ alignSelf: "center", marginLeft: 5, fontFamily: Fonts.fontText, fontSize: 16 }}>{getCategoryName(item.categoryId)}</Text>
                  </Left>

                  <Right style={{ alignSelf: "center" }}>
                     <TouchableOpacity
                        onPress={() =>
                           navigation.navigate("Recipe", { name: "Screen RecipesList" })
                        }
                     >
                        <Image source={Icons.icoCart}></Image>
                     </TouchableOpacity>
                  </Right>
               </CardItem>
            </Card>
         </TouchableHighlight>
      );
   };


   return (
      <View>
         <FlatList
            //vertical
            //showsVerticalScrollIndicator={false}
            //numColumns={2}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
         />
      </View>
   );
}

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: "center"
//    }
// })
