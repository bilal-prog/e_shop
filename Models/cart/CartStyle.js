import {StyleSheet} from 'react-native'
import { COLOURS } from '../../Components/database/Database'


 const styles = StyleSheet.create({
    container: {
        width: '100%',
        
        flex:1,
        
      },

      cnt: {
        width: '100%',
        
        
        backgroundColor: COLOURS.white,
        paddingHorizontal: 40,
        paddingTop: 20,
        
        justifyContent: 'center',
        
      },
      
      
      container4: {
        
        width: '75%',
        height: 120,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
        
        
      },
      cardContainer1: {
        
        width: '70%',
        height: 120,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginRight: '10%'
          
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
          width: 30,
          height: 30,
          backgroundColor: COLOURS.white,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: COLOURS.backgroundDark,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 5,
          marginLeft: 5,
          

      },
      btnText: {
          color: COLOURS.black,
          fontSize: 10,
          fontWeight: '800',
          textAlign: 'center'
      },
      icon: {
        width:20,
        height: 20,
        
        
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        
    },
   
    deleteBtn: {
        backgroundColor: "#9999",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 100,
        marginLeft: '25%',
        marginBottom: 10,
        alignSelf: 'flex-end'
        
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
    price: {
      fontSize: 16,
      color: COLOURS.backgroundDark
    },
    chevron1: {
      width: 30,
      height: 30,
      
    },
    adress: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      
      alignItems: 'center',
      marginBottom: 30,
      
  },
  adress2: {
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      
      
  },
  camionIcon: {
      width: 20,
      height:20,
  },
  visaIcon: {
    width: 35,
    height:35,
},
  camion: {
      backgroundColor: COLOURS.backgroundLight,
      padding: 16,
      borderRadius: 20
  },
  visa: {
    backgroundColor: COLOURS.backgroundLight,
    padding: 9,
    borderRadius: 20
},
  adressTxt: {
      fontSize: 16,
      color: "gray",
      width: 170,
      
      marginLeft: 10,
      
      
  },
  title: {
    color: COLOURS.black,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  totalView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
    
  },
  total: {
    fontSize: 16,
    color: "gray",
    
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

