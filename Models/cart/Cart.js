import { SafeAreaView,TextInput,FlatList, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './CartStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct,} from '../../action';
import {COLOURS} from '../../Components/database/Database'






export default function Cart({navigation,route}){



const [numP, setNumP] = useState(null)
  



  const products= useSelector((state) => state.global.products);
  const numProducts= useSelector((state) => state.global.numProducts);
  const dispatch = useDispatch();
  









const Item = ({id,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName,quantity}) => (
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
        <Text style={styles.price}>Quantity: {quantity}</Text>
        <View style={styles.cart}>
            
              <TouchableOpacity style={styles.button}

              //minimizer quantité par 1

              >
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
              <Text>{numProducts}</Text>
              <TouchableOpacity style={styles.button}

              //maximizer quantité par 1

              >
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            
            
        </View>
      </View>
            <TouchableOpacity style={styles.deleteBtn}>
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