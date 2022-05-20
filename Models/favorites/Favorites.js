import { SafeAreaView,TextInput,ActivityIndicator,Alert, FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOURS, Items} from '../../Components/database/Database'


import styles from './FavoritesStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import {addProduct,addQuantity} from '../../action';
import { FavoritesStrings, HomeStrings } from '../../Components/database/Strings';




export default function AllProducts({navigation,route}){



  
  const [isLoading, setIsLoading] = useState(false)
  const language = useSelector((state)=> state.global.language)
  

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
                <Text style={{ fontSize: 12,color: COLOURS.green, }}>{language === "arabe" ? HomeStrings.available.arabeText : HomeStrings.available.englishText}</Text>
              </View>
            ) : (
              <View style={styles.availableView}>
                <View style={[styles.circle,{backgroundColor: COLOURS.red}]}/>
                <Text style={{fontSize: 12, color: COLOURS.red, }}>{language === "arabe" ? HomeStrings.unavailable.arabeText : HomeStrings.unavailable.englishText}</Text>
              </View>
            )
          ) : null}
          {
            isOff ?
            <>
              <Text style={[styles.price,{textDecorationLine: 'line-through'}]}>{productPrice} DH</Text>
              <Text style={styles.price} >{parseInt(productPrice - (productPrice*offPercentage/100))} DH</Text>
            </>
            : 
            <Text style={styles.price}>{productPrice} DH</Text>
          }
          <View style={styles.cart}>
            <TouchableOpacity style={[styles.button,{opacity: isAvailable ? 1 : 0.5}]}
            disabled={!isAvailable}
            onPress={()=>{ 
              const el = (element) => element.id === id

              let check = products.findIndex(el)

              if (check === -1) {

                dispatch(addProduct(prod))
                
                Alert.alert("Product added", "Please check your Cart",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}])
              }else{
                Alert.alert("Product was not added", "This product is already in your Cart please check it",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}]) 
              }
             }}>
              <Text style={styles.btnText}>{language === "arabe" ? FavoritesStrings.addButton.arabeText : FavoritesStrings.addButton.englishText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cartBtn,{opacity: isAvailable ? 1 : 0.5}]}
            disabled={!isAvailable}
            onPress={()=>{
              const el = (element) => element.id === id

              let check = products.findIndex(el)

              if (check === -1) {

                dispatch(addProduct(prod))
                
                Alert.alert("Product added", "Please check your Cart",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}])
              }else{
                Alert.alert("Product was not added", "This product is already in your Cart please check it",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}]) 
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




const ListEmptyComponent = () =>(
  <View style={styles.empty}>
    <Text style={styles.emptyTxt}>This is your Cart, it's empty so  please go to add some products to check them out from here</Text>

    <TouchableOpacity style={styles.buttonCheckOut}
    onPress={()=>{
      navigation.navigate("Home")
    }}
    >
      <Text style={styles.BtnText}>LET'S GO   {'->'}</Text>
    </TouchableOpacity>
  </View>
)







  return ( 

    <SafeAreaView style={styles.container}>
      <Header name1={language === "arabe" ? FavoritesStrings.pageHeader.arabeText : FavoritesStrings.pageHeader.englishText} name={"Favorites"} onPress={() => navigation.navigate('Home')}/>
        <View style={styles.container2}>
          
          
          
          
                
          <FlatList
            data={favorites}
            
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            maxToRenderPerBatch={5}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={renderFooter}
            onEndReached={handle}
            onEndReachedThreshold={0}
            />
        

      
          </View>
    </SafeAreaView>
   );
}