import { SafeAreaView,TextInput,FlatList, Text,Alert, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './CartStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { plusProduct,minProduct, deleteProduct, deleteQuantity, initializeProducts,addCommand} from '../../action';
import {COLOURS} from '../../Components/database/Database';

import moment from 'moment';
import { CartStrings } from './Strings';






export default function Cart({navigation,route}){



const [totalPrice, setTotalPrice] = useState(0)


const [date, setDate] = useState(new Date());
const [lang, setLang] = useState()
const [dateFormat, setDateFormat] =useState(moment(date).format("DD/MM/YYYY HH:mm:ss"));
   


  const products= useSelector((state) => state.global?.products);
  const commands= useSelector((state) => state.global?.commands);
  const language= useSelector((state) => state.global?.language);
  
  const dispatch = useDispatch();

  


  useEffect(() => {
     
    totalPriceFunction();
  }, [products]);

  useEffect(() => {
     
    idOfCommand();
  }, [commands]);

  useEffect(() => {
     
    setLang(language)
  }, [language]);

  

// const indexById = (id) => {
  
//   for (let index = 0; index < quantites.length; index++) {
//     if (quantites[index].productID === id) {
//       return index;
//     }
    
//   }
// }




const ListFooterComponent = () =>(
  <View>
    <Text style={styles.title}>{lang === "arabe" ? CartStrings.deliveryLocation.arabeText : CartStrings.deliveryLocation.englishText}</Text>

<View style={styles.adress}>
      <View style={styles.adress2}>

      <TouchableOpacity style={styles.camion}>
        <Image style={styles.camionIcon} source={require('../../Assets/Icons/camion.png')}/>
      </TouchableOpacity>
      <View>
        <Text numberOfLines={2} style={styles.adressTxt}>ave 20 agdal rabat ave 20 agdal rabatcave 20 agdal rabat ave 20 agdal rabat</Text>
      </View>
      </View>
        <TouchableOpacity>
          <Image style={styles.chevron1} source={require('../../Assets/Icons/chevronR.png')}/>
        </TouchableOpacity>
</View>

<Text style={styles.title}>{lang === "arabe" ? CartStrings.payement.arabeText : CartStrings.payement.englishText}</Text>

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

<Text style={styles.title}>{lang === "arabe" ? CartStrings.payement.arabeText : CartStrings.payement.englishText}</Text>

<View style={styles.totalView}>
  <Text style={styles.total}>{lang === "arabe" ? CartStrings.subTotal.arabeText : CartStrings.subTotal.englishText}</Text>
  <Text style={styles.total}>${totalPrice}</Text>
</View>

<View style={[styles.totalView,{marginBottom: 45}]}>
  <Text style={styles.total}>{lang === "arabe" ? CartStrings.shippingCost.arabeText : CartStrings.shippingCost.englishText}</Text>
  <Text style={styles.total}>+100</Text>
</View>

<View style={[styles.totalView,]}>
  <Text style={styles.total}>{lang === "arabe" ? CartStrings.total.arabeText : CartStrings.total.englishText}</Text>
  <Text style={[styles.total,{color: COLOURS.black, fontWeight: '700', fontSize: 25}]}>${totalPrice + 100}</Text>
</View>

<TouchableOpacity style={styles.buttonCheckOut}
    
    onPress={
      ()=>{

        Alert.alert("Creating a command","Do you want to create a command?",[{text:"NO"}, {text:"YES", onPress: ()=>
        {
          if (products.length > 0) {
            if(commands.length === 0){
              dispatch(addCommand({products: products, 
                details:
                {adress: "ave 20 agdal rabat ave 20 agdal rabatcave 20 agdal rabat ave 20 agdal rabat",
                date: new Date(),
                 
                commandId: 0, 
                price: totalPrice + 100,
                status:'New'
                }}));
            }else{
              
    
    
              dispatch(addCommand({products: products, 
                details:
                {adress: "ave 20 agdal rabat ave 20 agdal rabatcave 20 agdal rabat ave 20 agdal rabat",
                date: new Date(),
                 
                commandId: idOfCommand() + 1, 
                price: totalPrice + 100,
                status:'New'
                }}));
            }

            dispatch(initializeProducts())
            totalPriceFunction();
            Alert.alert("Command was added","Please check your command in the Commands page",[{text:"CHECK", onPress: ()=>{navigation.navigate("Commands")}}, {text:"NO NEED"}])
          }else{
            Alert.alert("Your Cart is 'Empty' !!!","Please add some products to check them out",[{text:"OK"}])
          }
        }}])

        



        

        
      }
    }
    >
      <Text style={styles.BtnText}>{lang === "arabe" ? CartStrings.checkButton.arabeText : CartStrings.checkButton.englishText}(${totalPrice + 100})</Text>
</TouchableOpacity>

  </View>
)















const Item = ({id,item,isOff,offPercentage,category, productImage,isAvailable,productPrice,productName,quantity,quantityToken}) => (
  
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
        
        <View style={styles.cart}>
            
              <TouchableOpacity style={[styles.button,{opacity: quantityToken === 1? 0.4 : 1}]}
              disabled={quantityToken === 1? true : false}
              //minimizer quantit?? par 1
              onPress={
                ()=>{
                  //const el = (element) => element.productID == id
                
                //dispatch(minProduct(quantites.findIndex(el)))

                dispatch(minProduct(id))

                totalPriceFunction();
                }
              }

              >
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.price}>{quantityToken}</Text>
              <TouchableOpacity style={[styles.button,{opacity: quantity === 0? 0.4 : 1}]}
              disabled={quantity === 0? true : false}
              //maximizer quantit?? par 1
              onPress={
                ()=>{
                //   const el = (element) => element.productID == id
                
                // dispatch(plusProduct(quantites.findIndex(el)))

                dispatch(plusProduct(id))
                totalPriceFunction();
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
    quantityToken={item.quantityToken}
    item={item}
    
    />
);

}




const idOfCommand = () =>{
  let idC = 0;

  
  commands.map((el)=> idC = el.details.commandId);

  return idC;
}

const totalPriceFunction = () =>{
  let somme = 0;
  products.map((el)=> somme = somme + el.productPrice*el.quantityToken);

  setTotalPrice(somme);

}




const ListEmptyComponent = () =>(
  <View style={styles.empty}>
    <Text style={styles.emptyTxt}>gggggg{language === "arabe" ? CartStrings.text.arabeText : CartStrings.text.englishText}</Text>

    <TouchableOpacity style={styles.buttonCheckOut}
    onPress={()=>{
      navigation.navigate("Home")
    }}
    >
      <Text style={styles.BtnText}>{language === "arabe" ? CartStrings.addButton.arabeText : CartStrings.addButton.englishText}   {'->'}</Text>
    </TouchableOpacity>
  </View>
)







// ?????? My Cart View

  return ( 

    <SafeAreaView style={styles.container}>
      
      <Header name1={lang === "arabe" ? CartStrings.pageHeader.arabeText : CartStrings.pageHeader.englishText} name='Cart' onPress={() => navigation.goBack()}/>
        <View style={styles.cnt}>
          {products.length === 0
          ?
          <ListEmptyComponent/>
          :(null)}

        
          
            <FlatList
                      data={products}
                      
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                      maxToRenderPerBatch={5}
                      showsVerticalScrollIndicator={false}
                      
                      
                      
            />
          
            <ListFooterComponent/>
          

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