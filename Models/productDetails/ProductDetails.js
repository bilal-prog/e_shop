import { SafeAreaView,TextInput,Alert,StatusBar,FlatList, Dimensions,I18nManager, Animated, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './ProductDetailsStyle';
import { Items , COLOURS} from '../../Components/database/Database';
import { ProductDetailsStrings } from '../../Components/database/Strings'
import { useSelector, useDispatch } from 'react-redux';
import {addProduct, plusProduct} from '../../action';






export default function ProductDetails({navigation,route}){


  const products= useSelector((state) => state.global.products);
  const quantites= useSelector((state) => state.global.quantites);
  const language = useSelector((state)=> state.global?.language);
  const [lang,setLangg] = useState();



const dispatch = useDispatch();

//dispatch(addProduct({id:2,name:"hamdi"}))

    const {productID} = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    
      getDataFromDB();
      setLangg(language);
      console.log("langPPPP:    "+lang);

    
  }, [language]);




  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }

    setLangg(language)
  };


  // const minimizerQuantity = () => {
  //   for (let index = 0; index < Items.length; index++) {
  //     if (Items[index].id == productID) {
  //       Items[index].quantity = Items[index].quantity - 1
  //     }
  //   }
  // }



   //product horizontal scroll product card
   const renderProduct = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={()=>{
          return(
            <View style={styles.imagesView}>
              <FlatList
                    data={product.productImageList ? product.productImageList : null}
                    horizontal
                    renderItem={renderProduct}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={"fast"}
                    snapToInterval={width}
                    bounces={false}
                    onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                    )}
                />
            </View>
          );
        }}
        style={[styles.renderView,{width: width,}]}>
        <Image
          source={item}
          style={styles.renderImage}
        />
      </TouchableOpacity>
    );
  };





  return ( 

    <SafeAreaView>

    <View style={styles.container}>
        <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>
        
            <View style={styles.container2}>
                <View style={styles.container3}>
                  {product.isOff ? (
                  <View
                    style={styles.cardContainer2}>
                    <Text
                      style={styles.solde}>
                      {product.offPercentage}%
                    </Text>
                  </View>
                ) : null}
                </View>
                <FlatList
                    data={product.productImageList ? product.productImageList : null}
                    horizontal
                    renderItem={renderProduct}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={"fast"}
                    snapToInterval={width}
                    bounces={false}
                    onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                    )}
                />
                <View style={styles.scrollIndicatorContainer}>
                    {
                    product.productImageList
                    ? 
                    product.productImageList.map((data, index) => {
                    let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                    });
                  return (
                    <Animated.View
                      key={index}
                      style={[styles.scrollIndicator,{opacity,}]}></Animated.View>
                  );
                })
              : null}
                </View>

            </View>
            <ScrollView>
            <View style={styles.container4}>
              <View style={styles.blueContainer}>
                <Image style={[styles.chevron1,{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}]} source={require('../../Assets/Icons/blueCart.png')}/>
                <Text style={styles.blueTxt}>Shopping</Text>
              </View>
              <View style={styles.productNameLink}>
                <Text style={styles.productName}>{product.productName}</Text>
                <TouchableOpacity style={styles.linkBtn}>
                  <Image style={styles.link} source={require('../../Assets/Icons/link1.png')}/>
                </TouchableOpacity>
              </View>

              

              <Text style={styles.description}>{lang === "english" ? product.description : product.arabeDescription}</Text>
              <View style={styles.adress}>
                <View style={styles.adress2}>

                <TouchableOpacity style={styles.camion}>
                  <Image style={[styles.camionIcon,{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}]} source={require('../../Assets/Icons/camion.png')}/>
                </TouchableOpacity>
                <View>
                  <Text numberOfLines={2} style={styles.adressTxt}>ave 20 agdal rabat ave 20 agdal rabat  ave 20 agdal rabatave 20 agdal rabat</Text>
                </View>
                </View>
                  <TouchableOpacity style={styles.chevronBtn}>
                    <Image style={[styles.chevron1,{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}]} source={require('../../Assets/Icons/chevronR.png')}/>
                  </TouchableOpacity>
              </View>

             

              
              {
                product.isOff ?
                <View style={styles.priceView}>
                  <Text style={[styles.price,{textDecorationLine: 'line-through'}]}>{product.productPrice} DH</Text>
                  <Text style={styles.price} >{parseInt(product.productPrice - (product.productPrice*product.offPercentage/100))} DH</Text>
                </View>
                : 
                <View style={styles.priceView}>
                <Text style={styles.price}>{product.productPrice} DH</Text>
                </View>
              }

              <View style={styles.buttonsView}>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                  navigation.goBack()
                }}>
                <Text style={[styles.BtnText,{fontSize: lang === "arabe" ? 18 : 16}]}>{lang === "english" ? ProductDetailsStrings.returnButton.englishText : ProductDetailsStrings.returnButton.arabeText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{opacity: !product.isAvailable? 0.5 : 1}]}
                disabled={!product.isAvailable}
                onPress={()=>{
                const el = (element) => element.id === product.id

                let check = products.findIndex(el)
                console.log("check"+JSON.stringify(products));
                console.log("check"+check);
                if (check == -1) {

                  product.isOff ? dispatch(addProduct({...product,productPrice:parseInt(product.productPrice - (product.productPrice*product.offPercentage/100))}))
                  : dispatch(addProduct(product))
                  
                  //dispatch(addQuantity({productID: productID, quantityOrigin: product.quantity - 1, quantityToken: 1}))
                  
                  Alert.alert("Product was added", "Please check your Cart",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}])  
                }else{
                  Alert.alert("Product was not added", "This product is already in your Cart please check it",[{text: "CHECK",onPress: ()=>navigation.navigate("Cart")},{text: "NO NEED"}]) 
                }
                
                }}>
                  <Text style={[styles.BtnText,{fontSize: lang === "arabe" ? 18 : 16}]}>{lang === "english" ? ProductDetailsStrings.addButton.englishText :  ProductDetailsStrings.addButton.arabeText}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
    </View>
    </SafeAreaView>
   );
}
 

