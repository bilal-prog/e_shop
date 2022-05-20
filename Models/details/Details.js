import { SafeAreaView,TextInput,FlatList, Text,Alert, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './DetailsStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { plusProduct,minProduct, deleteProduct, deleteQuantity, initializeProducts,addCommand, plusProductCommand, minProductCommand, addCopyToCommand, deleteProductfromCommand} from '../../action';
import {COLOURS} from '../../Components/database/Database';
import { CartStrings, CommandsStrings } from '../../Components/database/Strings';

import moment from 'moment';






export default function Details({navigation,route}){

    const commands = 0



const [totalPrice, setTotalPrice] = useState(0)
const commandId = route.params?.commandId;
const status = route.params?.status;
const time = route.params?.time;
const dateCommand = route.params?.date

const [date, setDate] = useState(new Date());
const [dateFormat, setDateFormat] =useState(moment(date).format("DD/MM/YYYY HH:mm:ss"));
   


  const language = useSelector((state)=> state.global?.language);
  const commandCopy = useSelector((state) => state.global?.commandCopy)
  const products = commandCopy.products
  
  
  const dispatch = useDispatch();

  


  useEffect(() => {
     
    totalPriceFunction();
  }, [products]);

//   useEffect(() => {
     
//     idOfCommand();
//   }, [commandCopy]);

  






const ListFooterComponent = () =>(
  <View>
    {status === "New" 
    ?
    <>
        <Text style={styles.title}>{language === "arabe" ? CartStrings.deliveryLocation.arabeText : CartStrings.deliveryLocation.englishText}</Text>

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

        <Text style={styles.title}>{language === "arabe" ? CartStrings.payement.arabeText : CartStrings.payement.englishText}</Text>

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
    </>
      :(null)}
      <View style={{marginBottom: 40}}/>

      <Text style={styles.title}>{language === "arabe" ? CartStrings.total.arabeText : CartStrings.total.englishText}</Text>

      <View style={styles.totalView}>
        <Text style={styles.total}>{language === "arabe" ? CartStrings.subTotal.arabeText : CartStrings.subTotal.englishText}</Text>
        <Text style={styles.total}>{totalPrice} DH</Text>
      </View>

      <View style={[styles.totalView,{marginBottom: 45}]}>
        <Text style={styles.total}>{language === "arabe" ? CartStrings.shippingCost.arabeText : CartStrings.shippingCost.englishText}</Text>
        <Text style={styles.total}>+100 DH</Text>
      </View>

      <View style={styles.totalView}>
        <Text style={styles.total}>{language === "arabe" ? CartStrings.total.arabeText : CartStrings.total.englishText}</Text>
        <Text style={[styles.total,{color: COLOURS.black, fontWeight: '700', fontSize: 25}]}>{totalPrice + 100} DH</Text>
      </View>

      <TouchableOpacity style={[styles.buttonCheckOut,{opacity: status === "New" ? 1 : 0.5}]}
        disabled={status === "New" ? false : true}
          onPress={
            ()=>{
                

                if(status === "New"){
                  const commandCopyPrime = {...commandCopy};
                  commandCopyPrime.details.price = totalPrice + 100
                  dispatch(addCopyToCommand({...commandCopy}))

                  Alert.alert("Command Was Modified","Please check your commands"+status,[{text:"CHECK", onPress: ()=>{navigation.navigate("Commands")}}, {text:"NO NEED"}])
                }else{
                  Alert.alert("Command Wasn't Modified !","Sorry you can't modify this command, it's already "+status,[{text:"OK"}])
                }
              


              }
          }
          >
            <Text style={styles.BtnText}>{language === "arabe" ? CartStrings.saveButton.arabeText : CartStrings.saveButton.englishText}</Text>
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
        
        <Text style={styles.price}>{productPrice} DH</Text>
        {/* <Text style={styles.price}>Quantity: {quantity}</Text> */}

        
        { status === "New"
        ?
        <View style={styles.cart}>
            
              <TouchableOpacity style={[styles.button,{opacity: quantityToken === 1? 0.4 : 1}]}
              disabled={quantityToken === 1? true : false}
              //minimizer quantité par 1
              onPress={
                ()=>{
                  //const el = (element) => element.productID == id
                
                //dispatch(minProduct(quantites.findIndex(el)))

                dispatch(minProductCommand(id))

                totalPriceFunction();
                }
              }

              >
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.price}>{quantityToken}</Text>
              <TouchableOpacity style={[styles.button,{opacity: quantity === 0? 0.4 : 1}]}
              disabled={quantity === 0? true : false}
              //maximizer quantité par 1
              onPress={
                ()=>{
                dispatch(plusProductCommand(id))
                totalPriceFunction();
                }
              }

              >
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            
            
        </View>
        :(null)}
      </View>
            {status === "New"
            ?
            <TouchableOpacity style={styles.deleteBtn}
              onPress={
                ()=>{
                  Alert.alert("Product removing","Are you sure you want to remove this product?",[{text: "Cancel",
                onPress: ()=> console.log("cancel")},{text: "Yes", onPress: ()=>{
                  const el = (element) => element.id == id
                  console.log(products.findIndex(el));
                dispatch(deleteProductfromCommand(products.findIndex(el)))
                
                }}])
                  
                }
              }
            >
              <Image source={require('../../Assets/Icons/delete.png')} style={styles.icon}/>
            </TouchableOpacity>
            : (null)}
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




const ListHeaderComponent = () =>(
    <View style={styles.card}>
    <View style={styles.card2}>
        <View style={styles.firstHalf}>
            <View style={[styles.idDate,{flexDirection: language === "arabe" ? 'row-reverse' : 'row'}]}>
              <View style={[styles.rowView,{flexDirection: language === "arabe" ? 'row-reverse' : 'row'}]}>
                <Text style={styles.Title}>#</Text>
                <Text style={styles.cardTxtCommandDate}>{commandId}</Text>
              </View>
            
              <View style={styles.statusView}>
                <Text style={styles.statusTxt1}>{
                  status === "New" ?
                  (language === "arabe" ? CommandsStrings.new.arabeText : CommandsStrings.new.englishText)
                  : status === "On Dlivery"
                  ?
                  (language === "arabe" ? CommandsStrings.onDelivery.arabeText : CommandsStrings.onDelivery.englishText)
                  : status === "Ready" 
                  ? (language === "arabe" ? CommandsStrings.ready.arabeText : CommandsStrings.ready.englishText)
                  : (null)
                }</Text>
              </View>
                
                
            </View>
            <View style={styles.rowView}>
              <Text style={styles.Title}>{language === "arabe" ? CommandsStrings.date.arabeText : CommandsStrings.date.englishText}:   </Text>
              <Text style={styles.cardTxtCommandDate}>{dateCommand} ({time})</Text>
            </View>
            <View style={styles.adressTextView}>
              <Text style={styles.Title}>{language === "arabe" ? CommandsStrings.adress.arabeText : CommandsStrings.adress.englishText}:</Text>
              <Text style={styles.cardTxtAdress} numberOfLines={2}>{commandCopy.details.adress}</Text>
            </View>
            <View style={styles.rowView}>
                <Text style={styles.Title}>{language === "arabe" ? CommandsStrings.price.arabeText : CommandsStrings.price.englishText}:  </Text>
                <Text style={styles.Title}>{totalPrice +100} DH</Text>
            </View>

            <Text style={[styles.Title,{marginTop:20}]}>{language === "arabe" ? CommandsStrings.your.arabeText : CommandsStrings.your.englishText}:</Text>
            
                
            
        </View>
        
    </View>
    
    
</View>
)







// ?????? My Cart View

  return ( 

    <SafeAreaView style={styles.container}>
      
      <Header name='Details' onPress={() => navigation.navigate('Commands')}/>
        <View style={styles.cnt}>

        
          
            <FlatList
                      data={products}
                      
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                      maxToRenderPerBatch={5}
                      showsVerticalScrollIndicator={false}
                      ListHeaderComponent={ListHeaderComponent}
                      
                      ListFooterComponent={ListFooterComponent}
                      ListFooterComponentStyle={{marginVertical: 40}}
            />
          

          

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