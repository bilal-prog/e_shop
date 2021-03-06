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
        marginBottom:10, 
        padding:16,
        
      },
      container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
          fontWeight: '400',
          padding: 10,
          
      },
      cardContainer1: {
        
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
          
      },
      cardContainer2: {
        
        position: 'absolute',
        width: '20%',
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
        marginBottom: 2,
          
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
      price: {
        fontSize: 16,
        color: COLOURS.backgroundDark
      },
      favorisIcon: {
        height: 30,
        width: 30,
        marginLeft: 10
      },
      priceFavoris: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      },
      
});
export default styles;

