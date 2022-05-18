import {StyleSheet} from 'react-native'
import { COLOURS } from '../../Components/database/Database'


 const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor: COLOURS.white,
        
        
        
        
        
      },
      container2: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        marginBottom: '15%'
      },
      
      container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
      },
      container4: {
        
        width: '100%',
        height: 120,
        flexDirection: 'column',
        justifyContent: 'center',
       
        
      },
      cnt: {
        width: '100%',
        
        
        backgroundColor: COLOURS.white,
        
        
        justifyContent: 'center',
        
      },
      
      header2: {
        color: COLOURS.black, 
        fontSize:22,
        letterSpacing:1,
        fontWeight:'500',
        marginBottom:10
      },
      header3: {
        color: COLOURS.black, 
        fontSize:14,
        letterSpacing:1,
        fontWeight:'300',
        marginBottom:10
      },
      flatHeaderText: {
        color: COLOURS.black, 
        fontSize:20,
        letterSpacing:1,
        fontWeight:'300',
      },
      flatLength: {
        color: "gray", 
        fontSize:14,
        letterSpacing:1,
        fontWeight:'300',
        marginLeft:10
        
      },
      flatHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          
      },
      seeAll: {
          fontSize: 14,
          color: COLOURS.blue,
          fontWeight: '400'
      },
      cardContainer1: {
        
        width: '100%',
        height: 120,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginRight: '10%',
        
          
      },
      cardContainer2: {
        
        position: 'absolute',
        width: '30%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
          
      },
      solde: {
        
        fontSize: 12,
        color: COLOURS.white,
        fontWeight: 'bold',
        letterSpacing: 1,
          
      },
      productName: {
        
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 10,
          
      },
      listProduct: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
      },
      row: {
          marginBottom: 10,
          
      },
      available: {
        
            flexDirection: 'row',
            alignItems: 'center',
          
      },
      availableView:{
        flexDirection: 'row',
        alignItems: 'center' ,
        
      },
      circle: {
          height:8,
          width:8,
          borderRadius:100
      },
      button: {
          width: '70%',
          height: 35,
          backgroundColor: COLOURS.green,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'

      },
      btnText: {
          color: COLOURS.white
      },
      icon: {
        width:25,
        height: 25,
        
        
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    cartBtn: {
        backgroundColor: "#9999",
        padding: 5,
        borderRadius: 5,
        marginLeft: '10%'
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    },
    price: {
      fontSize: 16,
      color: COLOURS.backgroundDark
    },
    empty: {
      width: '100%',
      justifyContent: 'center',
      marginVertical: 10
    },
    emptyTxt: {
      color: COLOURS.black,
      fontSize: 26,
      textAlign: 'center'
    },
    buttonCheckOut: {
      backgroundColor: COLOURS.blue,
      padding: 10,
      borderRadius: 20,
      marginVertical: 30
      
  },
  BtnText: {
    color: COLOURS.white,
    fontSize: 20,
    textAlign: 'center'
  },
});
export default styles;

