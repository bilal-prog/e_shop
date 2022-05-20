import { StyleSheet } from 'react-native';
import { COLOURS } from '../../Components/database/Database';


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor: COLOURS.white,
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
          backgroundColor: '#cfe2f3',
        
          
         
      },
      card2: {
        width: '100%',
        
        
        
       
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
        
       
    },
      btnTxt: {
          color: COLOURS.white,
          padding: 12,
          fontSize: 12,
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
        fontSize: 15
    },
    firstHalf: {
        width: '70%',
    },
    idDate: {
        
        flexDirection: 'column',
        

    },
    cardTxtAdress: {
        color: COLOURS.black,
        fontSize: 15,
        marginVertical: 10
    },
    cardTxtPrice: {
        color: COLOURS.black,
        fontSize: 25,
        marginVertical: 5,
        fontWeight: '700'
    },
    circle: {
        height:8,
        width:8,
        borderRadius:100
    },
    circle2: {
        height:20,
        width:20,
        borderRadius:100,
        borderWidth: 2,
        borderColor: COLOURS.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        height: 15,
        width: 15,
        alignSelf: 'center'
    },
    midleView: {
        width: '20%',
        height: 4,
        backgroundColor: COLOURS.backgroundDark,

    },
    statusView: {
        backgroundColor: '#6FA8DC',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    statusView3: {
        backgroundColor: '#6FA8DC',
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
        color: COLOURS.black,
        fontWeight: '400'
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