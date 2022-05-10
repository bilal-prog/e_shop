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
        alignItems: 'center'
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
    flatView: {
        marginBottom: 70
    },
    price: {
      fontSize: 16,
      color: COLOURS.backgroundDark
    }
    
    
});
export default styles;

