import { StyleSheet } from 'react-native';
import { COLOURS } from '../../Components/database/Database';


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor: COLOURS.backgroundLight,
    },
    container2: {
        marginBottom:60, 
        paddingHorizontal:16,
        justifyContent: 'center'
        
      },
      card: {
          width: '100%',
          
          padding:10,
          marginVertical: 5,
          
          borderRadius: 10,
          backgroundColor: COLOURS.white,
        
          
         
      },
      card2: {
        width: '100%',
        
        
        
       
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
        
       
    },
      btnTxt: {
          color: COLOURS.white,
          padding: 15,
          fontSize: 15,
          fontWeight: '600'
      },
      button: {
        backgroundColor: COLOURS.blue,
        borderRadius: 10,
        
      },
      cardTxtCommandId: {
          color: COLOURS.black,
          fontSize: 20,
          marginBottom: 10
      },
      cardTxtCommandDate: {
        color: COLOURS.black,
        fontSize: 20
    },
    firstHalf: {
        width: '60%',
    },
    idDate: {
        
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    cardTxtAdress: {
        color: COLOURS.black,
        fontSize: 15,
        marginBottom: 10
    },
    cardTxtPrice: {
        color: COLOURS.black,
        fontSize: 25,
        marginVertical: 5
    },
    circle: {
        height:8,
        width:8,
        borderRadius:100
    },
    circle2: {
        height:12,
        width:12,
        borderRadius:100
    },
    icons: {
        height: 20,
        width: 20,
        alignSelf: 'center'
    },
    midleView: {
        width: '20%',
        height: 4,
        backgroundColor: COLOURS.backgroundDark,

    },
    statusView: {
        backgroundColor: COLOURS.backgroundLight,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    statusView3: {
        backgroundColor: COLOURS.backgroundLight,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    statusView2: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    statusTxt1: {
        fontSize: 20,
        color: COLOURS.green,
        fontWeight: '600'
    },
    statusTxt2: {
        fontSize: 20,
        color: COLOURS.black,
        fontWeight: '600'
    },
    statusTxt3: {
        fontSize: 20,
        color: COLOURS.blue,
        fontWeight: '600'
    }
    
    
    
});
export default styles;