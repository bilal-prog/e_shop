import { SafeAreaView,TextInput, Text, ScrollView, StatusBar,FlatList, View,Image,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { COLOURS } from '../../Components/database/Database';
import Header from '../../Components/header/Header';

import styles from './CommandsStyle';
import { useSelector } from 'react-redux';





export default function Commands({navigation}){

    
    const commands = useSelector((state)=>state.global.commands)
    console.log(JSON.stringify(commands));






    const Item = ({commandId,date,adress,price,status}) => (
        <View style={styles.card}>
            <View style={styles.card2}>
                <View style={styles.firstHalf}>
                    <View style={styles.idDate}>
                        <Text style={styles.cardTxtCommandId}>{commandId}</Text>
                        <Text style={styles.cardTxtCommandDate}>{date}</Text>
                    </View>
                    <Text style={styles.cardTxtAdress} numberOfLines={2}>{adress}</Text>
                    <View>
                        <Text style={styles.cardTxtPrice}>${price}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnTxt}>DETAILS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusView}>
                <View style={styles.statusView2}>
                    <View style={[styles.circle,{backgroundColor: COLOURS.green}]}/>
                    <Text style={styles.statusTxt1}>New</Text>
                </View>

                <View style={styles.statusView2}>
                    <View style={[styles.circle,{backgroundColor: COLOURS.black}]}/>
                    <Text style={styles.statusTxt2}>On Delivery</Text>
                </View>

                <View style={styles.statusView2}>
                    <View style={[styles.circle,{backgroundColor: COLOURS.blue}]}/>
                    <Text style={styles.statusTxt3}>Ready</Text>
                </View>
            </View>
            <View style={styles.statusView3}>
                {status === 'New' ? 
                    <View style={[styles.circle2,{borderWidth: 4,borderColor: COLOURS.green,height: 30,width: 30}]}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/greenDone.png')}/>
                    </View>
                    :
                    <View style={[styles.circle2,{backgroundColor: COLOURS.green}]}/>
                }
                
                {status === 'OnDelivery' ? 
                <>
                    
                    <View style={[styles.circle2,{borderWidth: 4,borderColor: COLOURS.black,height: 30,width: 30,justifyContent: 'center',alignItems: 'center'}]}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/blackDone.png')}/>
                    </View>
                </>
                    :
                    <View style={[styles.circle2,{backgroundColor: COLOURS.black}]}/>
                }

                {status === 'Ready' ? 
                <>
                    
                    <View style={[styles.circle2,{borderWidth: 4,borderColor: COLOURS.blue,height: 30,width: 30}]}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/blueDone.png')}/>
                    </View>
                </>
                    :
                    <View style={[styles.circle2,{backgroundColor: COLOURS.blue}]}/>
                }
            </View>
        </View>
    );


    const renderItem = ({item}) => {

  
        return(
            <Item commandId={item.details.commandId}
            date={item.details.date}
            adress={item.details.adress}
            price={item.details.price}
            status={item.details.status}
            item={item}
            />
        );
        
     }






    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <Header name="Commands" onPress={() => navigation.navigate('Home')}/>

            <View style={styles.container2}>
            <FlatList
                  data={commands}
                  
                  renderItem={renderItem}
                  keyExtractor={item=>item.details.commandId}
                  maxToRenderPerBatch={5}
                  showsVerticalScrollIndicator={false}
                 
                  />
            </View>
        </SafeAreaView>
    );
}
 

