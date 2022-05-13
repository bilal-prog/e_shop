import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView,TextInput, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';


import React, { useState } from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Models/home/Home";
import Cart from "./Models/cart/Cart";
import Favorites from "./Models/favorites/Favorites";

import ProductDetails from "./Models/productDetails/ProductDetails"
import AllProducts from "./Models/allProducts/AllProducts"
import Commands from "./Models/commands/Commands"

import { Provider } from "react-redux";
//import { store, persistor } from "./redux/store";
//import { store, persistor } from './store.configureStore'
import  configureStore  from "./store";

import { useSelector, useDispatch } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { addProduct } from "./action";





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {

  

  const products= useSelector((state) => state.global.products);
  const commands= useSelector((state) => state.global.commands);
  const favorites= useSelector((state) => state.global.favorites);
  
  // console.log(configureStore().store.getState().global.products);
  // const dispatch = useDispatch();
  // dispatch(addProduct({nom:"hamdi"}))
   console.log(JSON.stringify(configureStore().store.getState().global.products.length));
  let profileBadge=11;
  let homeBadge=products.length;
  let favoriteBadge=favorites.length;
  let cartBadge=products.length + commands.length;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={
      ({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          let width,height,badge;
          if (route.name==='Home') {
            width=15;
            height=15;
            
            
            iconName = focused ? require('./Assets/Icons/Active/homeActive.png'):
            require('./Assets/Icons/home.png')
          }else if (route.name==='Cart') {
            width=20;
            height=20;
            iconName = focused ? require('./Assets/Icons/Active/cartActive.png'):
            require('./Assets/Icons/cart.png')
          }else if (route.name==='Favorites') {
            
            width=20;
            height=20;
            iconName = focused ? require('./Assets/Icons/Active/favoriteActive.png'):
            require('./Assets/Icons/favorite.png')
          }

          return( 
          <View style={{padding: 20}}>

            <Image source={iconName}style={[{width: width, height: height, }]}/>
            
          </View>
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#ADB5BD',
        tabBarStyle: {height: '8%',backgroundColor: '#FFFFFF'},
        tabBarItemStyle: {padding:5,backgroundColor: '#FFFFFF'},
        
        //tabBarShowLabel: false,
        tabBarLabelStyle: {
        
        fontWeight: '100',
        fontSize: 16,
        
        },
        
        
      })
    }
    >
      <Tab.Screen 

        name="Cart" 
        component={Cart}
        options={{headerShown:false, tabBarBadge:cartBadge > 9 ? '9+' : cartBadge, tabBarBadgeStyle:{position: 'absolute',
        top: 0,
        left:0,
        backgroundColor: '#E94242',
        width:20,
        height: 18,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',fontSize: 9}}}
        
      />
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{headerShown:false, tabBarBadge:homeBadge > 9 ? '9+' : homeBadge, tabBarBadgeStyle:{position: 'absolute',
        top: 0,
        left:0,
        backgroundColor: '#E94242',
        width:20,
        height: 18,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',fontSize: 9}}}
        
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        options={{headerShown:false, tabBarBadge:favoriteBadge > 9 ? '9+' : favoriteBadge, tabBarBadgeStyle:{position: 'absolute',
        top: 0,
        left:0,
        backgroundColor: '#E94242',
        width:20,
        height: 18,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',fontSize: 9}}}
      />
      
      
      
    </Tab.Navigator>
  )
}

export default function App(){
  // const store = configureStore().store;
  // let persistor = persistStore(store);
// <Provider store={store}>
// </Provider>
  return (
    
      
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="TabNavigator" 
            component={TabNavigator}
            
            />
            
            <Stack.Screen 
            name="ProductDetails" 
            component={ProductDetails}
            
            />
            <Stack.Screen 
            name="AllProducts" 
            component={AllProducts}
            
            />
            <Stack.Screen 
            name="Commands" 
            component={Commands}
            
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      
    
  );
}