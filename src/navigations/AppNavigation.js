import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from "../screens/Home/HomeScreen";
import Categories from "../screens/Categories/CategoriesScreen";
import Recipe from "../screens/Recipe/RecipeScreen";
import RecipesList from "../screens/RecipesList/RecipesListScreen";
import Search from "../screens/Search/SearchScreen";
import Ingredient from "../screens/Ingredient/IngredientScreen";
import IngredientsDetails from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import { Ionicons } from '@expo/vector-icons';
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";

import Colors from "../config/MyColors";
import Fonts from "../config/MyFonts";


const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
   <HomeStack.Navigator
      screenOptions={{
         headerStyle: {
            backgroundColor: Colors.Pink59,
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
            // fontWeight: '500',
            fontFamily: Fonts.fontHeader,
            fontSize: 23
         },
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Recipe" component={Recipe} />
      <HomeStack.Screen name="IngredientsDetails" component={IngredientsDetails} />
   </HomeStack.Navigator>
)

const CategoriesStack = createStackNavigator();

const CategoriesStackScreen = () => (
   <CategoriesStack.Navigator
      screenOptions={{
         headerStyle: {
            backgroundColor: Colors.Pink59,
         },
         headerTintColor: '#ECF0F1',
         headerTitleStyle: {
            // fontWeight: 'bold',
            fontFamily: Fonts.fontHeader,
            fontSize: 23
         },
      }}>
      <CategoriesStack.Screen name="Categories" component={Categories} />
      <CategoriesStack.Screen name="Home" component={Home} />
      <CategoriesStack.Screen name="RecipesList" component={RecipesList} />
      <CategoriesStack.Screen name="Recipe" component={Recipe} />
      
   </CategoriesStack.Navigator>
)

const DrawerContainerStack = createStackNavigator();

const DrawerContainerStackScreen = () => (
   <DrawerContainerStack.Navigator>
      <DrawerContainerStack.Screen name="DrawerContainer" component={DrawerContainer} />
   </DrawerContainerStack.Navigator>
)


const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
   <Tabs.Navigator
      screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
               iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
            } else if (route.name === 'Categories') {
               iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Search') {
               iconName = focused ? 'ios-search' : 'ios-search';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
         },

      })}
      tabBarOptions={{
         activeTintColor: Colors.Pink59,
         inactiveTintColor: 'gray',
         labelStyle: {
            fontSize: 13,
            fontFamily: Fonts.fontText
         }
         // style: {

         //    //backgroundColor: '#f4511e',
         // }
      }}

   >
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Categories" component={CategoriesStackScreen} />
      <Tabs.Screen name="Search" component={Search} />
   </Tabs.Navigator>
)



const Drawer = createDrawerNavigator();

export default function AppNavigation() {
   return (
      <NavigationContainer>
         <Drawer.Navigator
            drawerStyle={{
               backgroundColor: Colors.Pink59,
               width: 240,

            }}

            drawerContent={props => <DrawerContainer {...props} />}
            drawerContentOptions={{
               activeTintColor: "white",
               inactiveTintColor: 'white',
            }}
         >
            <Drawer.Screen name="Home" component={TabsScreen} />
            {/* <Drawer.Screen name="DrawerContainer" component={DrawerContainer} /> */}
         </Drawer.Navigator>
         {/* <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Create Account" }} />
      </AuthStack.Navigator> */}
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
