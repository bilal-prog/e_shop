import { SafeAreaView,TextInput,FlatList,StatusBar, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import {COLOURS, Items} from '../../Components/database/Database'
import styles from './HomeStyle';
import Header from '../../Components/header/Header';
import {activeFavorite, inactiveFavorite, setFavorisFalse, setFavorisTrue} from '../../action';
import { useDispatch, useSelector } from 'react-redux';


//import { useSelector, useDispatch } from 'react-redux';
//import { addProduct} from '../../redux/productReducer';





export default function Home({navigation}){

    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);
    const [products4, setProducts4] = useState([]);
    const [accessory, setAccessory] = useState([]);
    const [accessory2, setAccessory2] = useState([]);
    const [accessory3, setAccessory3] = useState([]);
    const [accessory4, setAccessory4] = useState([]);
    const [numProducts, setNumProducts] = useState(false);
    const [numAccessories, setNumAccessories] = useState(false);
    const [add2, setAdd2] = useState(false);
    
    const dispatch = useDispatch();
    const favorites= useSelector((state) => state.global.favorites);


    //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);


  // useEffect(() => {
    
  //     getDataFromDB();
    
  // }, [numProducts]);


  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let productList3 = [];
    let productList2 = [];
    let productList4 = [];   
    let accessoryList = [];
    let accessoryList2 = [];
    let accessoryList3 = [];
    let accessoryList4 = [];

    
    
      for (let index = 0; index < Items.length; index++) {
        if (Items[index].category == 'product' && productList.length < 5) {
          productList.push(Items[index]);
          
        } 
      }
      setProducts(productList);
    


      for (let index = 0; index < Items.length; index++) {
        if (Items[index].category == 'product') {
          productList2.push(Items[index]);
          
        } 
      }
      setProducts2(productList2);

      for (let index = 5; index < Items.length; index++) {
        if (Items[index].category == 'product' && productList3.length < 5) {
          productList3.push(Items[index]);
          
        } 
      }
      setProducts3(productList3);




      for (let index = 10; index < Items.length; index++) {
        if (Items[index].category == 'product' && productList4.length < 5) {
          productList4.push(Items[index]);
          
        } 
      }
      setProducts4(productList4);
      
    


      
        
      for (let i = 0; i < Items.length; i++) {
        if (Items[i].category == 'accessory' && accessoryList.length < 5) {
        accessoryList.push(Items[i]);
      
      }
    }
    setAccessory(accessoryList);
    
    


    for (let i = 0; i < Items.length; i++) {
      if (Items[i].category == 'accessory' ) {
      accessoryList2.push(Items[i]);
    
    }
  }
  setAccessory2(accessoryList2);

  for (let i = 5; i < Items.length; i++) {
    if (Items[i].category == 'accessory' && accessoryList3.length < 5) {
    accessoryList3.push(Items[i]);
  
  }
}
setAccessory3(accessoryList3);


for (let i = 10; i < Items.length; i++) {
  if (Items[i].category == 'accessory' && accessoryList4.length < 5) {
  accessoryList4.push(Items[i]);

}
}
setAccessory4(accessoryList4);



    
    
    
  };



  // const active = (id) => {
  //   if(favorites.length === 0) 
  //   {
  //     dispatch(activeFavorite({productID: id, favoris: true}))
  //   }

  //   console.log(JSON.stringify("helllllllo"+favorites));
  // }


  // Check favorites (active or not) of each item in Home



  const checkActive = (id) => 
  {
    
      for (let index = 0; index < favorites.length; index++) {
      if (favorites[index].productID == id) {
        return favorites[index].favoris;
      }
    }
  
  }












  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {productID: data.id})}
        style={{
          width: '48%',
          marginVertical: 14,
          
        }}>
        <View
          style={styles.cardContainer1}>
          {data.isOff ? (
            <View
              style={styles.cardContainer2}>
              <Text
                style={styles.solde}>
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={styles.productName}>
          {data.productName}
        </Text>
        {data.category == 'accessory' ? (
          data.isAvailable ? (
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
        <Text>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };








  const Item = ({item,id,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {productID: id})}
        style={{
          width: 190,
          marginVertical: 14,
          marginRight:16
          
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
          <Image
            source={productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
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
        <View style={styles.priceFavoris}>
          <Text style={styles.price}>&#8377; {productPrice}</Text>
          

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

      </TouchableOpacity>
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
       item={item}
       />
   );
   
}































  return ( 

    <View style={[styles.container]}>
        <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} style={{height:"100%", width: '100%'}}
          
        >
        <Header name='Home' badgeShoppingBag={10} badgeCart={20}/>
        
        
        <View style={styles.container2}>
            <View style={styles.row}> 
                <Text style={styles.header2}>Bilal Shop &amp; Service</Text>
                <Text style={styles.header3}>
                    Audio shop on Agdal Ave 57.
                    {'\n'}This shop offers both products and services.
                </Text>
            </View>
            <View>
                <View style={styles.container3}>
                    <View style={styles.flatHeader}>
                    <Text style={styles.flatHeaderText}>Products</Text>
                    <Text style={[styles.flatLength,{}]}>{products.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('AllProducts', {list: products2,title: 'All Products'})}}>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                  data={products}
                  horizontal
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsHorizontalScrollIndicator={false}
                  />

            </View>



            <View>
                <View style={styles.container3}>
                    <View style={styles.flatHeader}>
                    <Text style={styles.flatHeaderText}>Accessory</Text>
                    <Text style={[styles.flatLength,{}]}>{accessory.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('AllProducts', {list: accessory2,title: 'All Accessories'})}>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                  data={accessory}
                  horizontal
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsHorizontalScrollIndicator={false}
                  />
                

            </View>





            




{/* repeated */}




<View>
                <View style={styles.container3}>
                    <View style={styles.flatHeader}>
                    <Text style={styles.flatHeaderText}>Products</Text>
                    <Text style={[styles.flatLength,{}]}>{products.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('AllProducts', {list: products2,title: 'All Products'})}>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                  data={products3}
                  horizontal
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsHorizontalScrollIndicator={false}
                  />

            </View>



            <View>
                <View style={styles.container3}>
                    <View style={styles.flatHeader}>
                    <Text style={styles.flatHeaderText}>Accessory</Text>
                    <Text style={[styles.flatLength,{}]}>{accessory.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('AllProducts', {list: accessory2,title: 'All Accessories'})}>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                  data={accessory3}
                  horizontal
                  renderItem={renderItem}
                  keyExtractor={item=>item.id}
                  maxToRenderPerBatch={5}
                  showsHorizontalScrollIndicator={false}
                  />
                

            </View>





            

           
        </View>
        </ScrollView>
        
    </View>
   );
}
 







                // <View style={styles.listProduct}>
                // {products.map(data => {
                // return <ProductCard data={data} key={data.id} />;
                // })}
                // </View>







        //          <TouchableOpacity
        //   onPress={active(id)}>
        //   {checkActive(id)?
        //   <Image style={styles.favorisIcon} source={require('../../Assets/Icons/favorisActive.png')} />
        // : 
        //   <Image style={styles.favorisIcon} source={require('../../Assets/Icons/favoris.png')} />
        // }
        // </TouchableOpacity> 