import { SafeAreaView,TextInput,ActivityIndicator,Alert, FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOURS, Items} from '../../Components/database/Database'


import styles from './FavoritesStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import {addProduct,addQuantity} from '../../action';




export default function AllProducts({navigation,route}){



  
  const [isLoading, setIsLoading] = useState(false)
  

  const dispatch = useDispatch();



  // useEffect(() => {
  //     getDataFromDB();
  // }, []);
  
  
    

    const favorites = useSelector((state)=> state.global.favorites);
    const products= useSelector((state) => state.global.products);
    

  // const getDataFromDB = async => {  
  //   let productList = []
  //   for (let index = 0; index < favorites.length; index++) {
  //     let i = Items.findIndex((el)=>el.id === favorites[index].productID)
      
  //     if (i !== -1) {
  //       productList.push(Items[i])
  //     }
  //   }
  //   setProducts2(productList);
  //   console.log("productList: "+JSON.stringify(productList));
  //   console.log("favorites: "+JSON.stringify(favorites));
  // }

  



  const Item = ({id,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName,prod,quantity}) => (
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
          {
            isOff ?
            <>
              <Text style={[styles.price,{textDecorationLine: 'line-through'}]}>&#8377; {productPrice}</Text>
              <Text style={styles.price} >&#8377; {parseInt(productPrice - (productPrice*offPercentage/100))}</Text>
            </>
            : 
            <Text style={styles.price}>&#8377; {productPrice}</Text>
          }
          <View style={styles.cart}>
            <TouchableOpacity style={styles.button}
            onPress={()=>{ 
              const el = (element) => element.productID === id

              let check = products.findIndex(el)

              if (check === -1) {

                dispatch(addProduct(prod))
                dispatch(addQuantity({productID: id, quantityOrigin: quantity - 1, quantityToken: 1}))
                Alert.alert("Product added", "Please check your Cart",[{text: "Ok",onPress: ()=>navigation.navigate("Cart")}])
              }else{
                Alert.alert("Product was not added", "This product is already in your Cart please check it") 
              }
             }}>
              <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartBtn}
            onPress={()=>{
              const el = (element) => element.productID === id

              let check = products.findIndex(el)

              if (check === -1) {

                dispatch(addProduct(prod))
                dispatch(addQuantity({productID: id, quantityOrigin: quantity - 1, quantityToken: 1}))
                Alert.alert("Product added", "Please check your Cart",[{text: "Ok",onPress: ()=>navigation.navigate("Cart")}])
              }else{
                Alert.alert("Product was not added", "This product is already in your Cart please check it") 
              }
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
      quantity={item.quantity}
      prod={item}
      />
  );
  
}






const renderFooter = () => {
  return (
    isLoading ?
    <View style={styles.loader}>
      <ActivityIndicator size={'large'}/>
    </View>
    : null
  );
}


const handle = () => {

}











  return ( 

    <SafeAreaView style={styles.container}>
        <Header name={"Favorites"} onPress={() => navigation.navigate('Home')}/>
        
        
        
              
                <FlatList
                  data={favorites}
                  
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={renderFooter}
                  onEndReached={handle}
                  onEndReachedThreshold={0}
                  />
              

            
    </SafeAreaView>
   );
}