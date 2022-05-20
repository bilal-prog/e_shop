import { SafeAreaView,TextInput,ActivityIndicator,Alert, FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOURS} from '../../Components/database/Database'


import styles from './AllProductsStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import {addProduct,addQuantity,activeFavorite, inactiveFavorite} from '../../action';
import { AllProductsStrings,HomeStrings } from '../../Components/database/Strings';




export default function AllProducts({navigation,route}){



  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [available, setAvailable] = useState(false)
  const [product, setProduct] = useState({});

  const products= useSelector((state) => state.global.products);

  const language= useSelector((state) => state.global.language);

  const favorites= useSelector((state) => state.global.favorites);

  const dispatch = useDispatch();


  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);




  














const checkActive = (id) => 
  {
    
      for (let index = 0; index < favorites.length; index++) {
      if (favorites[index].productID == id) {
        return favorites[index].favoris;
      }
    }
  
  }












  const getDataFromDB = async => {
    

    let list = route.params?.list;
    setIsLoading(false)
    let title = route.params?.title
    console.log(list);
    setList(list);
    setTitle(title);

  }

  



  const Item = ({id,quantity,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName,prod}) => (
    <View style={{
      marginVertical: 14,
    }}>
    <View
        
        style={{
          width: '43%',
          
          
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
            isAvailable ?
            
            (
              <View style={styles.availableView}>
                <View style={[styles.circle,{backgroundColor: COLOURS.green}]}/>
                <Text style={{ fontSize: 12,color: COLOURS.green, }}>{language === "arabe" ? HomeStrings.unavailable.arabeText : HomeStrings.unavailable.englishText}</Text>
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
          
        </View>
      </View>


<View style={styles.cart}>
  
            <TouchableOpacity style={[styles.button,{opacity: !isAvailable? 0.5 : 1}]}
            disabled={!isAvailable}
            onPress={()=>{ 
              const el = (element) => element.id === id

              let check = products.findIndex(el)

              if (check === -1) {
                isOff ? dispatch(addProduct({...prod,productPrice: parseInt(productPrice - (productPrice*offPercentage/100))}))
                : dispatch(addProduct(prod))
                
                Alert.alert("Product added", "Please check your Cart",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}])
              }else{
                Alert.alert("Product was not added", "This product is already in your Cart please check it",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}]) 
              }
             }}>
              <Text style={styles.btnText}>{language === "arabe" ? AllProductsStrings.addButton.arabeText : AllProductsStrings.addButton.englishText}</Text>
            </TouchableOpacity>
        <View style={styles.buttons}>
            <TouchableOpacity style={[styles.cartBtn,{opacity: !isAvailable? 0.5 : 1}]}
            disabled={!isAvailable}
            onPress={()=>{
              
              const el = (element) => element.id === id

              let check = products.findIndex(el)

              if (check === -1) {

                isOff ? dispatch(addProduct({...prod,productPrice: parseInt(productPrice - (productPrice*offPercentage/100))}))
                : dispatch(addProduct(prod))
                
                Alert.alert("Product added", "Please check your Cart",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")}])
              }else{
                Alert.alert("Product was not added", "This product is already in your Cart please check it",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}]) 
              }
              
            }}>
              <Image source={require('../../Assets/Icons/cart.png')} style={styles.icon}/>
            </TouchableOpacity>
        
            <TouchableOpacity
           onPress={()=>{
             if(favorites.length === 0){
              dispatch(activeFavorite({productID: id, favoris: true}))
              console.log(JSON.stringify(favorites));
             }else{
              for (let index = 0; index < favorites.length; index++) {
                if ( id == favorites[index].productID) {
                  // if(favorites[index].favoris === true){
                  //   dispatch(setFavorisFalse(index))
                  // }else{
                  //   dispatch(setFavorisTrue(index))
                  // }
                  dispatch(inactiveFavorite(index))
                }else{
                  dispatch(activeFavorite({productID: id, favoris: true}))
                }
             }
           }}}
           
           
           
           >
           {checkActive(id)?
            <Image style={styles.favorisIcon} source={require('../../Assets/Icons/favorisActive.png')} />
           : 
            <Image style={styles.favorisIcon} source={require('../../Assets/Icons/favoris.png')} />
            }
          </TouchableOpacity>
        </View>
          </View>

          </View>
);






const renderItem = ({item}) => {

  
  return(
      <Item id={item.id}
      isOff={item.isOff}
      quantity={item.quantity}
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
        <Header name={title} name1={title === "All Products" ? (language === "arabe" ? AllProductsStrings.pageHeaderProducts.arabeText : AllProductsStrings.pageHeaderProducts.englishText ) :  (language === "arabe" ? AllProductsStrings.pageHeaderAccessories.arabeText : AllProductsStrings.pageHeaderAccessories.englishText )} onPress={() => navigation.navigate('Home')}/>
        
        
        
                
                <FlatList
                  data={list}
                  
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