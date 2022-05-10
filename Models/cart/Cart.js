import { SafeAreaView,TextInput,FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './CartStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { plusProduct,minProduct, deleteProduct, deleteQuantity} from '../../action';
import {COLOURS} from '../../Components/database/Database'






export default function Cart({navigation,route}){



const [numP, setNumP] = useState(null)
  



  const products= useSelector((state) => state.global.products);
  const quantites= useSelector((state) => state.global.quantites);
  const dispatch = useDispatch();
  
const quantityById = (id)=>{
          const el = (element) => element.productID == id
          return quantites[quantites.findIndex(el)]
        }
// const indexById = (id) => {
  
//   for (let index = 0; index < quantites.length; index++) {
//     if (quantites[index].productID === id) {
//       return index;
//     }
    
//   }
// }








const Item = ({id,item,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName,quantity}) => (
  <View
      
      style={{
        width: '50%',
        marginVertical: 14,
        
        flexDirection: 'row',
        justifyContent: 'space-between'

      }}>
      
      <View
        style={styles.cardContainer1}>
        
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
          style={styles.productName}
          numberOfLines={2}>
          {productName}
        </Text>
        
        <Text style={styles.price}>&#8377; {productPrice}</Text>
        <Text style={styles.price}>Quantity: {quantityById(id).quantityOrigin}</Text>
        <View style={styles.cart}>
            
              <TouchableOpacity style={styles.button}

              //minimizer quantité par 1
              onPress={
                ()=>{
                  const el = (element) => element.id == id
                
                dispatch(minProduct(products.findIndex(el)))
                }
              }

              >
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.price}>{quantityById(id).quantityToken}</Text>
              <TouchableOpacity style={styles.button}

              //maximizer quantité par 1
              onPress={
                ()=>{
                  const el = (element) => element.id == id
                
                dispatch(plusProduct(products.findIndex(el)))
                }
              }

              >
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            
            
        </View>
      </View>
            <TouchableOpacity style={styles.deleteBtn}
              onPress={
                ()=>{
                  const el = (element) => element.id == id
                
                dispatch(deleteProduct(products.findIndex(el)))
                dispatch(deleteQuantity(quantites.findIndex(el)))
                }
              }
            >
              <Image source={require('../../Assets/Icons/delete.png')} style={styles.icon}/>
            </TouchableOpacity>
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
    item={item}
    
    />
);

}

  return ( 

    <SafeAreaView style={styles.container}>
      <Header name='Cart' onPress={() => navigation.navigate('Home')}/>
        <View style={styles.cnt}>
        

        
          <View style={styles.flatView}>
            <FlatList
                      data={products}
                      
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                      maxToRenderPerBatch={5}
                      showsVerticalScrollIndicator={false}
            />
          </View>



        </View>
        
        
    </SafeAreaView>
   );
}
 





{/* <FlatList
                  data={products}
                  
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsVerticalScrollIndicator={false}
                  
                  /> */}