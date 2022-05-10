import { SafeAreaView,TextInput,FlatList, Text,Alert, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './CartStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { plusProduct,minProduct, deleteProduct, deleteQuantity} from '../../action';
import {COLOURS} from '../../Components/database/Database'






export default function Cart({navigation,route}){



const [totalPrice, setTotalPrice] = useState(0)
  
   useEffect(() => {
     totalPriceFunction();
   }, []);


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




const ListFooterComponent = () =>(
  <View>
    <Text style={styles.title}>Delivery Location</Text>

<View style={styles.adress}>
      <View style={styles.adress2}>

      <TouchableOpacity style={styles.camion}>
        <Image style={styles.camionIcon} source={require('../../Assets/Icons/camion.png')}/>
      </TouchableOpacity>
      <View>
        <Text numberOfLines={3} style={styles.adressTxt}>ave 20 agdal rabat ave 20 agdal rabatave 20 agdal rabatave 20 agdal rabat</Text>
      </View>
      </View>
        <TouchableOpacity>
          <Image style={styles.chevron1} source={require('../../Assets/Icons/chevronR.png')}/>
        </TouchableOpacity>
</View>

<Text style={styles.title}>Payement Method</Text>

<View style={styles.adress}>
      <View style={styles.adress2}>

      <TouchableOpacity style={styles.visa}>
        <Image style={styles.visaIcon} source={require('../../Assets/Icons/visa.png')}/>
      </TouchableOpacity>
      <View>
        <Text numberOfLines={3} style={styles.adressTxt}>VISA CLASSIC {'\n'}*****0921</Text>
      </View>
      </View>
        <TouchableOpacity>
          <Image style={styles.chevron1} source={require('../../Assets/Icons/chevronR.png')}/>
        </TouchableOpacity>
</View>
<View style={{marginBottom: 40}}/>

<Text style={styles.title}>Payement Method</Text>

<View style={styles.totalView}>
  <Text style={styles.total}>SubTotal</Text>
  <Text style={styles.total}>${totalPrice}</Text>
</View>

<View style={[styles.totalView,{marginBottom: 45}]}>
  <Text style={styles.total}>Shipping Cost</Text>
  <Text style={styles.total}>+100</Text>
</View>

<View style={[styles.totalView,]}>
  <Text style={styles.total}>Total</Text>
  <Text style={[styles.total,{color: COLOURS.black, fontWeight: '700', fontSize: 25}]}>${totalPrice + 100}</Text>
</View>

<TouchableOpacity style={styles.buttonCheckOut}
    onPress={
      ()=>{
        Alert.alert("Still in progress mode")
      }
    }
    >
      <Text style={styles.BtnText}>CHECKOUT(${totalPrice + 100})</Text>
</TouchableOpacity>
  </View>
)















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
            
              <TouchableOpacity style={[styles.button,{opacity: quantityById(id).quantityToken === 1? 0.4 : 1}]}
              disabled={quantityById(id).quantityToken === 1? true : false}
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
              <TouchableOpacity style={[styles.button,{opacity: quantityById(id).quantityOrigin === 0? 0.4 : 1}]}
              disabled={quantityById(id).quantityOrigin === 0? true : false}
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
                  Alert.alert("Product removing","Are you sure you want to remove this product?",[{text: "Cancel",
                onPress: ()=> console.log("cancel")},{text: "Yes", onPress: ()=>{
                  const el = (element) => element.id == id
                
                dispatch(deleteProduct(products.findIndex(el)))
                dispatch(deleteQuantity(quantites.findIndex(el)))
                }}])
                  
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






const totalPriceFunction = () =>{
  let somme = 0;
  products.map((el)=> somme = somme + el.productPrice);

  setTotalPrice(somme);

}








// ?????? My Cart View

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
                      ListFooterComponent={ListFooterComponent}
                      ListFooterComponentStyle={{marginVertical: 40}}
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