import { SafeAreaView,TextInput,FlatList,StatusBar, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import {COLOURS, Items} from '../../Components/database/Database'
import { HomeStrings } from '../../Components/database/Strings';
import styles from './HomeStyle';
import Header from '../../Components/header/Header';
import {activeFavorite, inactiveFavorite, setFavorisFalse, setFavorisTrue} from '../../action';
import { useDispatch, useSelector } from 'react-redux';
import configureStore from '../../store'


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
    const [lang,setLangg] = useState();
    const [name, setName] = useState('الصفحة الرئيسية')
    
    const dispatch = useDispatch();
    //const favorites= configureStore().store.getState().global.favorites;
    const favorites= useSelector((state) => state.global.favorites);
    const commands= useSelector((state) => state.global.commands);
    const productsStore= useSelector((state) => state.global.products);
    const language = useSelector((state)=> state.global?.language);


    //get called on screen loads


  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getDataFromDB();
  //   });

  //   return unsubscribe;
  // }, [navigation]);


  useEffect(() => {
    
      getDataFromDB();
    
  }, []);

  useEffect(() => {

    getDataFromDB();
    setLangg(language)

    if(language == 'arabe'){setName('الصفحة الرئيسية')}
    else{ setName('Home')}

    console.log("lang:    "+lang);
     
   }, [language]);


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
    
    const index = favorites?.findIndex((el)=>el.id === id)
      
      if (index !== -1) {
        return true
      }else{
        return false;
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
              {
                lang === "arabe" 
                ? 
                <>
                  <Text style={{ fontSize: 12,color: COLOURS.green, }}>{lang === "arabe" ? HomeStrings.available.arabeText : HomeStrings.available.englishText}</Text>
                  <View style={[styles.circle,{backgroundColor: COLOURS.green}]}/>
                </>
                :
                <>
                  <View style={[styles.circle,{backgroundColor: COLOURS.green}]}/>
                  <Text style={{ fontSize: 12,color: COLOURS.green, }}>{lang === "arabe" ? HomeStrings.available.arabeText : HomeStrings.available.englishText}</Text>
                </>
              }
            </View>
          ) : (
            
              lang === "arabe"
              ? 
                <>
                  <View style={styles.availableView}>
                    <Text style={{fontSize: 12, color: COLOURS.red, }}>{lang === "arabe" ? HomeStrings.unavailable.arabeText : HomeStrings.unavailable.englishText}</Text>
                    <View style={[styles.circle,{backgroundColor: COLOURS.red}]}/>
                  </View>
                </>
               : 
                <>
                  <View style={styles.availableView}>
                    <View style={[styles.circle,{backgroundColor: COLOURS.red}]}/>
                    <Text style={{fontSize: 12, color: COLOURS.red, }}>{lang === "arabe" ? HomeStrings.unavailable.arabeText : HomeStrings.unavailable.englishText}</Text>
                  </View>
                </>
              
            
          )
        ) : null}
        <View style={styles.priceFavoris}>
          
          {
            isOff ?
            <>
              <Text style={[styles.price,{textDecorationLine: 'line-through'}]}>{productPrice} DH</Text>
              <Text style={styles.price} >{parseInt(productPrice - (productPrice*offPercentage/100))} DH</Text>
            </>
            : 
            <Text style={styles.price}>{productPrice} DH</Text>
          }

          <TouchableOpacity
           onPress={()=>{
             if(favorites.length === 0){
              dispatch(activeFavorite(item))
              console.log(JSON.stringify(favorites));
             }else{
              const index = favorites.findIndex((el)=>el.id === id)

              if ( index !== -1 ) {
                // if(favorites[index].favoris === true){
                //   dispatch(setFavorisFalse(index))
                // }else{
                //   dispatch(setFavorisTrue(index))
                // }
                dispatch(inactiveFavorite(index))
              }else{
                dispatch(activeFavorite(item))
              }
             }
             
           }}
           
           
           
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

    <SafeAreaView style={[styles.container]}>
        <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} style={{height:"100%", width: '100%'}}
          
        >
        <Header name={name} badgeShoppingBag={commands.length} badgeCart={productsStore.length} onPress={()=>{navigation.navigate("Cart")}} onPress2={()=>{navigation.navigate("Commands")}}/>
        
        
        <View style={styles.container2}>
            <View style={styles.row}> 
                <Text style={styles.header2}>{lang === "arabe" ? HomeStrings.title.arabeText : HomeStrings.title.englishText}</Text>
                <Text style={styles.header3}>{lang === "arabe" ? HomeStrings.description.arabeText : HomeStrings.description.englishText}</Text>
            </View>
            <View>
                <View style={styles.container3}>
                    <View style={styles.flatHeader}>
                    <Text style={styles.flatHeaderText}>{lang === "arabe" ? HomeStrings.flatHeader.arabeText : HomeStrings.flatHeader.englishText}</Text>
                    <Text style={[styles.flatLength,{}]}>{products.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('AllProducts', {list: products2,title: 'All Products'})}}>
                        <Text style={styles.seeAll}>{lang === "arabe" ? HomeStrings.seeAll.arabeText : HomeStrings.seeAll.englishText}</Text>
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
                    <Text style={styles.flatHeaderText}>{lang === "arabe" ? HomeStrings.flatHeader2.arabeText : HomeStrings.flatHeader2.englishText}</Text>
                    <Text style={[styles.flatLength,{}]}>{accessory.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('AllProducts', {list: accessory2,title: 'All Accessories'})}>
                        <Text style={styles.seeAll}>{lang === "arabe" ? HomeStrings.seeAll.arabeText : HomeStrings.seeAll.englishText}</Text>
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
                    <Text style={styles.flatHeaderText}>{lang === "arabe" ? HomeStrings.flatHeader.arabeText : HomeStrings.flatHeader.englishText}</Text>
                    <Text style={[styles.flatLength,{}]}>{products.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('AllProducts', {list: products2,title: 'All Products'})}>
                        <Text style={styles.seeAll}>{lang === "arabe" ? HomeStrings.seeAll.arabeText : HomeStrings.seeAll.englishText}</Text>
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
                    <Text style={styles.flatHeaderText}>{lang === "arabe" ? HomeStrings.flatHeader2.arabeText : HomeStrings.flatHeader2.englishText}</Text>
                    <Text style={[styles.flatLength,{}]}>{accessory.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('AllProducts', {list: accessory2,title: 'All Accessories'})}>
                        <Text style={styles.seeAll}>{lang === "arabe" ? HomeStrings.seeAll.arabeText : HomeStrings.seeAll.englishText}</Text>
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
        
    </SafeAreaView>
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