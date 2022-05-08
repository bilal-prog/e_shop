import { SafeAreaView,TextInput,ActivityIndicator,Alert, FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOURS} from '../../Components/database/Database'


import styles from './AllProductsStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import {addProduct} from '../../action';




export default function AllProducts({navigation,route}){



  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();


  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);




  









const addP = async (id) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index].id == id) {
      await setProduct(list[index]);
      return;
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
              Alert.alert("Product added", "Please check your Cart")
             }}>
              <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartBtn}
            onPress={()=>{
              console.log("produit  "+prod);
              dispatch(addProduct(prod))
              Alert.alert("Product added", "Please check your Cart")
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
        <Header name={title} onPress={() => navigation.navigate('Home')}/>
        
        
        
                
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