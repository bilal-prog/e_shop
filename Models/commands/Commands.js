import { SafeAreaView,TextInput, Text, ScrollView, StatusBar,FlatList, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { COLOURS } from '../../Components/database/Database';
import Header from '../../Components/header/Header';

import styles from './CommandsStyle';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { addCommandCopy } from '../../action';
import { CommandsStrings } from '../../Components/database/Strings';





export default function Commands({navigation}){


    const [realTimeDate, setRealTimeDate] = useState(new Date())

   


    

    const language = useSelector((state)=>state.global.language)
    const commands = useSelector((state)=>state.global.commands)
    const commandCopy = useSelector((state)=>state.global.commandCopy)
   

    useEffect(()=>{
        
    },[commands])



    useEffect(()=>{
        const interval = setInterval(()=>{
            setRealTimeDate(new Date())
        },30000); //30 SECONDS TO RELOAD THE DATE
        return () => clearInterval(interval)
    }, [])

    const dispatch = useDispatch()

    




    const checkDate = (date,id) =>{
        const n = realTimeDate
        const now  = moment(n).format("DD/MM/YYYY HH:mm:ss");
        const then = moment(date).format("DD/MM/YYYY HH:mm:ss");
        

        const ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
        
        const v = new Date(ms)

        
        const m = (v).getMinutes()
        console.log("minutes: "+m);

        

        return m;
    }

    const checkStatus = (m) =>{
        var minutes = parseInt(m);

        if(minutes < 2){
            return 'New'
        }else if(minutes >= 2 && minutes < 4){
            return 'OnDelivery'
        }else if(minutes >= 4){
            return 'Ready'
        }
    }



    const setMinutesOrHoursOrDaysOrDate = (date) =>{
        const n = realTimeDate
        const now  = moment(n).format("DD/MM/YYYY HH:mm:ss");
        const then = moment(date).format("DD/MM/YYYY HH:mm:ss");

        const ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
        const v = new Date(ms)
        
        const s = (v).getSeconds()
        const m = (v).getMinutes()
        const h = (v).getHours()
        const d = (v).getDay()

        console.log(d+":"+h+":"+m+":"+s);
        
        const ss = parseInt(s)
        const mm = parseInt(m);
        const hh = parseInt(h);
        const dd = parseInt(d);
        

        if(ss < 60 && mm === 0){
            return ss+" s"
        }else if(mm < 60 && hh >= 1){
            return mm+" m"
        }else if(hh < 24 && d == 4){
            return hh+" h"
        }else if(dd >= 5){
            return  dd - 4 +" d";
        }

    }




    const Item = ({commandId,date,adress,price,status,item}) => (
        <TouchableOpacity style={styles.card}
        onPress={()=>{
            navigation.navigate("Details",{commandId: commandId,status: checkStatus(checkDate(date,commandId)),time: setMinutesOrHoursOrDaysOrDate(date), date: moment(date).format("DD/MM/YYYY")})
            dispatch(addCommandCopy(item))
        }}>
            <View style={styles.card2}>
                <View style={styles.firstHalf}>
                    <View style={styles.idDate}>
                        <View style={styles.card2}>
                            <Text style={styles.cardTxtCommandDate}># {commandId}</Text>
                        </View>
                        <Text style={styles.cardTxtCommandDate}>{language === "arabe" ? CommandsStrings.date.arabeText : CommandsStrings.date.englishText}:     {moment(date).format("DD/MM/YYYY")} ({setMinutesOrHoursOrDaysOrDate(date)})</Text>
                        
                        
                    </View>
                    
                    <Text style={styles.cardTxtAdress} numberOfLines={2}>{language === "arabe" ? CommandsStrings.adress.arabeText : CommandsStrings.adress.englishText}:   {adress}</Text>

                    
                        
                    
                </View>
                <View>
                    
                    <Text style={styles.cardTxtPrice}>${price}</Text>
                </View>
            </View>
            <View style={styles.statusView}>
                <View style={styles.statusView2}>
                {checkStatus(checkDate(date,commandId)) === 'New' ? 
                    <View style={styles.circle2}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/blackDone.png')}/>
                    </View>
                    :
                    (null)
                }
                    <Text style={styles.statusTxt1}>{language === "arabe" ? CommandsStrings.new.arabeText : CommandsStrings.new.englishText}</Text>
                </View>

                <View style={styles.statusView2}>
                {checkStatus(checkDate(date,commandId)) === 'OnDelivery' ? 
                <>
                    
                    <View style={styles.circle2}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/blackDone.png')}/>
                    </View>
                </>
                    :
                    (null)
                }
                    <Text style={styles.statusTxt1}>{language === "arabe" ? CommandsStrings.onDelivery.arabeText : CommandsStrings.onDelivery.englishText}</Text>
                </View>

                <View style={styles.statusView2}>
                {checkStatus(checkDate(date,commandId)) === 'Ready' ? 
                <>
                    
                    <View style={styles.circle2}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/blackDone.png')}/>
                    </View>
                </>
                    :
                    (null)
                }
                    <Text style={styles.statusTxt1}>{language === "arabe" ? CommandsStrings.ready.arabeText : CommandsStrings.ready.englishText}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
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


     const ListEmptyComponent = () =>(
        <View style={styles.empty}>
          <Text style={styles.emptyTxt}>{language === "arabe" ? CommandsStrings.text.arabeText : CommandsStrings.text.englishText}</Text>
      
          <TouchableOpacity style={styles.buttonCheckOut}
          onPress={()=>{
            navigation.navigate("Home")
          }}
          >
            <Text style={styles.BtnText}>{language === "arabe" ? CommandsStrings.addButton.arabeText : CommandsStrings.addButton.englishText}   {'->'}</Text>
          </TouchableOpacity>
        </View>
      )






    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <Header name1={language === "arabe" ? CommandsStrings.pageHeader.arabeText : CommandsStrings.pageHeader.englishText} name="Commands" onPress={() => navigation.goBack()}/>

            <View style={styles.container2}>
            <FlatList
                  data={commands}
                  ListEmptyComponent={ListEmptyComponent}
                  renderItem={renderItem}
                  keyExtractor={item=>item.details.commandId}
                  maxToRenderPerBatch={5}
                  showsVerticalScrollIndicator={false}
                 
                  />
            </View>
        </SafeAreaView>
    );
}
 

