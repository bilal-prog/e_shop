import { SafeAreaView,TextInput,FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './FavoritesStyle';
import Header from '../../Components/header/Header';
import { Items } from '../../Components/database/Database';
import {addProduct} from '../../action';
import { useDispatch, useSelector } from 'react-redux';

//import { useSelector, useDispatch } from 'react-redux';
//import { addProduct} from '../../redux/productReducer';





export default function Favorites({navigation}){


const favorites = useSelector((state)=>state.global.favorites)



  const prod = []

 const dispatch = useDispatch();













  
  useEffect(() => {
    
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);




  









const addP = async (id) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index].id == id) {
      await setProducts(list[index]);
      return;
    }
  }
  
}













  const getDataFromDB = async => {
    
    for (let index = 0; index < Items.length; index++) {

      for (let i = 0; i < favorites.length; i++) { 
      if (Items[index].id == favorites[i].id) {
        
        prod.push(Items[index]);
        
        return;
      }
    }
    
  }
}
  












  const Item = ({id,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName,prod}) => (
    <View
        
        style={{
          width: '43%',
          marginVertical: 14,
          
          flexDirection: 'row',
          justifyContent: 'space-between',
          
          

        }}>
        <View
          style={styles.cardContainer1}>
          {isOff ? (
            <View
              style={styles.cardContainer2}>
              <Text
                style={styles.solde}>
                {offPercentage}%
              </Text>
            </View>
          ) : null}
          <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', {productID: id})}
          style={{
            width: '80%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image
              source={productImage}
              style={{
                width: '80%',
                height: '80%',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container4}>

          <Text
          numberOfLines={2}
            style={styles.productName}>
            {productName}
          </Text>
          {category == 'accessory' ? (
            isAvailable ? (
              <View style={styles.availableView}>
                <View style={[styles.circle,{backgroundColor: COLOURS.green}]}/>
                <Text style={{ fontSize: 12,color: COLOURS.green, }}>Available</Text>
              </View>
            ) : (
              <View style={styles.availableView}>
                <View style={[styles.circle,{backgroundColor: COLOURS.red}]}/>
                <Text style={{fontSize: 12, color: COLOURS.red, }}>Unavailable</Text>
              </View>
            )
          ) : null}
          <Text style={styles.price}>&#8377; {productPrice}</Text>
          <View style={styles.cart}>
            <TouchableOpacity style={styles.button}
            onPress={()=>{ 
              console.log("produit  "+prod);
              dispatch(addProduct(prod))
             }}>
              <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartBtn}
            onPress={()=>{
              console.log("produit  "+prod);
              dispatch(addProduct(prod))
              
            }}>
              <Image source={require('../../Assets/Icons/cart.png')} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
);










  const renderItem = ({item}) => {

  
    return(
        <Item id={item.id}
        isOff={item.isOff}
        offPercentage={item.offPercentage}
        category={item.category}
        productImage={item.productImage}
        isAvailable={item.isAvailable}
        productPrice={item.productPrice}
        productName={item.productName}
        prod={item}
        />
    );
    
  }













  return ( 

    <SafeAreaView>
        <Header name='Favorites'/>
        
        <FlatList
                  data={prod}
                  
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsVerticalScrollIndicator={false}
                  
                  />
        
    </SafeAreaView>
   );
}









// import * as React from 'react';
// import { View, Text, ScrollView, Button } from 'react-native';
// import { Card } from 'react-native-paper';

// const a = Array(50)
//   .fill()
//   .map((_, i) => i);

// const App = () => {
//   const scrollViewRef = React.useRef();
//   const [pos, setPos] = React.useState(0);
//   const [arr, setArr] = React.useState(a);

//   return (
//     <View style={{ flex: 1 }}>
//       <Text>pos: {pos}</Text>
//       <ScrollView
//         style={{ height: '200px' }}
//         onScroll={(e) => setPos(e.nativeEvent.contentOffset.y)}>
//         {arr.map((i) => (
//           <Text>{i}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };
// export default App;




 

