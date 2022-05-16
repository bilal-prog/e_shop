import { SafeAreaView,TextInput, Text, ScrollView, StatusBar,FlatList, View,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { COLOURS } from '../../Components/database/Database';
import Header from '../../Components/header/Header';

import styles from './CommandsStyle';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { addCommandCopy } from '../../action';





export default function Commands({navigation}){


    const [realTimeDate, setRealTimeDate] = useState(new Date())

   


    

    
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
            return "created in: "+ss+" seconds"
        }else if(mm < 60 && hh >= 1){
            return "created in: "+mm+" minutes"
        }else if(hh < 24 && d == 4){
            return "created in: "+hh+" hours"
        }else if(dd >= 5){
            return  "created in: "+moment(date).format("DD/MM/YYYY");
        }

    }




    const Item = ({commandId,date,adress,price,status,item}) => (
        <View style={styles.card}>
            <View style={styles.card2}>
                <View style={styles.firstHalf}>
                    <View style={styles.idDate}>
                    
                        <Text style={styles.cardTxtCommandDate}>{setMinutesOrHoursOrDaysOrDate(date)}</Text>
                        
                    </View>
                    <Text style={styles.cardTxtAdress} numberOfLines={2}>{adress}</Text>
                    
                        
                    
                </View>
                <View>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        navigation.navigate("Details",{commandId: commandId,status: checkStatus(checkDate(date,commandId)),time: setMinutesOrHoursOrDaysOrDate(date)})
                        dispatch(addCommandCopy(item))
                    }}>
                        <Text style={styles.btnTxt}>DETAILS</Text>
                    </TouchableOpacity>
                    <Text style={styles.cardTxtPrice}>${price}</Text>
                </View>
            </View>
            <View style={styles.statusView}>
                <View style={styles.statusView2}>
                {checkStatus(checkDate(date,commandId)) === 'New' ? 
                    <View style={[styles.circle2,{borderWidth: 4,borderColor: COLOURS.green,height: 30,width: 30}]}>
                        <Image style={styles.icons} source={require('../../Assets/Icons/greenDone.png')}/>
                    </View>
                    :
                    <View style={[styles.circle2,{backgroundColor: COLOURS.green}]}/>
                }
                    <Text style={styles.statusTxt1}>New</Text>
                </View>

                <View style={styles.statusView2}>
                {checkStatus(checkDate(date,commandId)) === 'OnDelivery' ? 
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
                {checkStatus(checkDate(date,commandId)) === 'Ready' ? 
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
 

