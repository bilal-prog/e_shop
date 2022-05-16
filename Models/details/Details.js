import { SafeAreaView,TextInput,FlatList, Text,Alert, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './DetailsStyle';
import Header from '../../Components/header/Header';

import { useSelector, useDispatch } from 'react-redux';
import { plusProduct,minProduct, deleteProduct, deleteQuantity, initializeProducts,addCommand, plusProductCommand, minProductCommand, addCopyToCommand, deleteProductfromCommand} from '../../action';
import {COLOURS} from '../../Components/database/Database';

import moment from 'moment';






export default function Details({navigation,route}){

    const commands = 0



const [totalPrice, setTotalPrice] = useState(0)
const commandId = route.params?.commandId;
const status = route.params?.status;
const time = route.params?.time;

const [date, setDate] = useState(new Date());
const [dateFormat, setDateFormat] =useState(moment(date).format("DD/MM/YYYY HH:mm:ss"));
   


  
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
    <Text style={styles.title}>Delivery Location</Text>

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
      <Text style={styles.BtnText}>SAVE</Text>
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
        <Text style={styles.price}>Quantity: {quantity}</Text>
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
      </View>
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
    <View style={styles.card}>
    <View style={styles.card2}>
        <View style={styles.firstHalf}>
            <View style={styles.idDate}>
            
                <Text style={styles.cardTxtCommandDate}>{time}</Text>
                
            </View>
            <Text style={styles.cardTxtAdress} numberOfLines={2}>{commandCopy.details.adress}</Text>
            
                
            
        </View>
        
    </View>
    <View style={styles.statusView}>
        <View style={styles.statusView2}>
        {status === 'New' ? 
            <View style={[styles.circle2,{borderWidth: 4,borderColor: COLOURS.green,height: 30,width: 30}]}>
                <Image style={styles.icons} source={require('../../Assets/Icons/greenDone.png')}/>
            </View>
            :
            <View style={[styles.circle2,{backgroundColor: COLOURS.green}]}/>
        }
            <Text style={styles.statusTxt1}>New</Text>
        </View>

        <View style={styles.statusView2}>
        {status === 'OnDelivery' ? 
        <>
            
            <View style={[styles.circle2,{borderWidth: 4,borderColor: 'orange',height: 30,width: 30,justifyContent: 'center',alignItems: 'center'}]}>
                <Image style={styles.icons} source={require('../../Assets/Icons/blackDone.png')}/>
            </View>
        </>
            :
            <View style={[styles.circle2,{backgroundColor: 'orange'}]}/>
        }
            <Text style={styles.statusTxt2}>On Delivery</Text>
        </View>

        <View style={styles.statusView2}>
        {status === 'Ready' ? 
        <>
            
            <View style={[styles.circle2,{borderWidth: 4,borderColor: COLOURS.blue,height: 30,width: 30}]}>
                <Image style={styles.icons} source={require('../../Assets/Icons/blueDone.png')}/>
            </View>
        </>
            :
            <View style={[styles.circle2,{backgroundColor: COLOURS.blue}]}/>
        }
            <Text style={styles.statusTxt3}>Ready</Text>
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
                      ListHeaderComponent={ListEmptyComponent}
                      
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