import React from 'react';
import {
   FlatList,
   Text,
   View,
   Image,
   TouchableHighlight, TouchableOpacity, SafeAreaView
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import Icons from "../../config/MyIcons";
import Fonts from '../../config/MyFonts';
import Colors from "../../config/MyColors";

export default function CategoriesScreen({ navigation }, props) {
   navigation.setOptions({
      headerLeft: () => (
         <TouchableOpacity
            onPress={() => { navigation.openDrawer() }}
         // onPress={() =>
         //    navigation.navigate("Home", { name: "Home" })
         // }
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

   function onPressCategory(item) {
      const title = item.name
      const category = item
      navigation.navigate('RecipesList', { category, title })
   };

   function renderCategory({ item }) {
      return (
         // <TouchableHighlight underlayColor='gray' onPress={() => this.onPressCategory(item)}>
         //   <View style={styles.categoriesItemContainer}>
         //     <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
         //     <Text style={styles.categoriesName}>{item.name}</Text>
         //     <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
         //   </View>
         // </TouchableHighlight>
         <TouchableHighlight underlayColor='gray' onPress={() => onPressCategory(item)}>
            <Card>
               <CardItem>
                  <Left>
                     <Thumbnail source={{ uri: item.photo_url }} />
                     <Body>
                        <Text style={{ fontFamily: Fonts.fontTitle, fontSize: 23 }}>{item.name}</Text>
                     </Body>
                  </Left>
               </CardItem>
               <CardItem cardBody>
                  <Image source={{ uri: item.photo_url }} style={{ height: 400, width: null, flex: 1 }} />
               </CardItem>
               <CardItem>
                  <Left>
                     <Button transparent>
                        <Icon active name="thumbs-up" color="#900" />
                        <Text>12 Likes</Text>
                     </Button>
                  </Left>
                  <Body>
                     <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>6 Comments</Text>
                     </Button>
                  </Body>
                  <Right>
                     <Text style={{ fontFamily: Fonts.fontText, color: Colors.Pink59, fontSize: 16 }}>{getNumberOfRecipes(item.id)} Recipes</Text>
                  </Right>
               </CardItem>
            </Card>
         </TouchableHighlight>
      );
   };

   return (
      <SafeAreaView>
         <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => `${item.id}`}
         />
      </SafeAreaView>
   )

}

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: "center"
//    }
// })
