import { SafeAreaView,TextInput, Text,Alert, ScrollView, View,Image,TouchableOpacity,I18nManager } from 'react-native';
import React, {useState,useEffect} from 'react';
import { setLang } from '../../action';
import styles from './HeaderStyle';
import RNRestart from 'react-native-restart'
import { useSelector, useDispatch } from 'react-redux';





export default function Header(props){

    const [iconBack, setIxonBack] = useState('#9999');
    const [langg,setLangg] = useState();

    const dispatch = useDispatch();
    const language = useSelector((state)=> state.global?.language);
    console.log(JSON.stringify(language));



    useEffect(() => {
      
     dispatch(setLang(language))
     
      
    }, [language]);



    
  




    

    









  return ( 
    <View style={[styles.headerContainer]}>
      {props?.name === "Home" || props?.name === "الصفحة الرئيسية"
      ?

      
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity  style={[styles.iconBack,{backgroundColor: props?.badgeShoppingBag > 0 ? iconBack : (null)}]}
        onPress={props?.onPress2}>
          <Image source={require('../../Assets/Icons/bag.png')} style={styles.icon}/>
          {props?.badgeShoppingBag > 0 
          ?
          <View style={styles.badge}><Text style={{color:'white',fontSize:9}}>{props?.badgeShoppingBag}</Text></View>
        :
        (null)}
      </TouchableOpacity>

      <Text style={styles.textHeader}>{props?.name}</Text>

      <View style={styles.languageView}>
        <Text style={styles.languageText}>English</Text>
        
          <TouchableOpacity 
          onPress={
            ()=>{

                

                console.log(language);
              if(language === "arabe"){
                console.log("if1");
                
                dispatch(setLang("english"))
                  I18nManager.forceRTL(false);

                
                
                  
              }else if(language == "english"){
                console.log("if2");
                dispatch(setLang("arabe"))
                  I18nManager.forceRTL(true)
                  
                
                  
              }
              console.log(language);

              setTimeout(()=>{RNRestart.Restart()},2000)


              



              
            }
            
            
          }>
            <View style={[styles.radioView,{alignItems: I18nManager.isRTL ? 'flex-end': 'flex-start'}]}>
              <View style={styles.radioContent}/>
            </View>
          </TouchableOpacity>

        <Text style={styles.languageText}>عربي</Text>
      </View>
          
      <TouchableOpacity onPress={props?.onPress} style={[styles.iconBack,{backgroundColor: props?.badgeCart > 0 ? iconBack : (null)}]}>
          <Image source={require('../../Assets/Icons/cart.png')} style={styles.icon}/>
          {props?.badgeCart > 0 
          ?
          <View style={styles.badge}><Text style={{color:'white',fontSize:9}}>{props?.badgeCart}</Text></View>
        :
        (null)}
      </TouchableOpacity>
      
      </View>
      : props?.name=="All Products" || props?.name=="All Accessories" || props?.name=="Favorites" || props?.name=="Commands" || props?.name=="Details"
      ?
      <View style={styles.iconsContainer2}>
        <TouchableOpacity onPress={props.onPress}
        style={[styles.chevronView,{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}]}>
          <Image style={styles.chevron} source={require('../../Assets/Icons/chevronLeft.png')}/>
        </TouchableOpacity>
        <Text style={styles.textHeader2}>{props?.name1}</Text>
      </View>
      : props?.name==="Cart"
      ?
      <View style={styles.iconsContainer2}>
        <TouchableOpacity onPress={props?.onPress}
        style={styles.iconBack2}>
          <Image style={[styles.icon,{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}]} source={require('../../Assets/Icons/chevronLeft.png')}/>
        </TouchableOpacity>
        <Text style={[styles.textCartHeader,]}>{props?.name1}</Text>
      </View>  
      :
      (null)
      }
      
    </View>
   );
}
 

