import { SafeAreaView,TextInput, Text, ScrollView, View,Image,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

import styles from './HeaderStyle';





export default function Header(props){

    const [iconBack, setIxonBack] = useState('#9999')
    const [height, setHeight] = useState()

    
  






  return ( 
    <View style={[styles.headerContainer]}>
      {props?.name=="Home" 
      ?

      
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity  style={[styles.iconBack,{backgroundColor: props?.badgeShoppingBag > 0 ? iconBack : (null)}]}>
          <Image source={require('../../Assets/Icons/cart.png')} style={styles.icon}/>
          {props?.badgeShoppingBag > 0 
          ?
          <View style={styles.badge}><Text style={{color:'white',fontSize:9}}>{props?.badgeShoppingBag}</Text></View>
        :
        (null)}
      </TouchableOpacity>

      <Text style={styles.textHeader}>{props?.name}</Text>
          
      <TouchableOpacity onPress={props?.onPress} style={[styles.iconBack,{backgroundColor: props?.badgeCart > 0 ? iconBack : (null)}]}>
          <Image source={require('../../Assets/Icons/cart.png')} style={styles.icon}/>
          {props?.badgeCart > 0 
          ?
          <View style={styles.badge}><Text style={{color:'white',fontSize:9}}>{props?.badgeCart}</Text></View>
        :
        (null)}
      </TouchableOpacity>
      
      </View>
      : props?.name=="All Products" || props?.name=="All Accessories" || props?.name=="Favorites"
      ?
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={props.onPress}>
          <Image style={styles.chevron} source={require('../../Assets/Icons/chevronLeft.png')}/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>{props?.name}</Text>
      </View>
      : props?.name==="Cart"
      ?
      <View>
        <TouchableOpacity onPress={props?.onPress}
        style={styles.iconBack2}>
          <Image style={styles.icon} source={require('../../Assets/Icons/chevronLeft.png')}/>
        </TouchableOpacity>
        <Text style={[styles.textHeader,{padding: 15}]}>My {props?.name}</Text>
      </View>  
      :
      (null)
      }
      
    </View>
   );
}
 

