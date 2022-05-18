import { StyleSheet } from 'react-native';
import { COLOURS } from '../database/Database';


const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 60,
       
        backgroundColor: '#FFFFFF',
        // position: 'absolute',
        // top: '0%',
        
        


        
        
        
    },
    iconsContainer: {
       paddingHorizontal: 10,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        
    },
    iconsContainer2: {
        paddingHorizontal: 10,
         height: '100%',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
        
         
     },
    iconBack: {
        backgroundColor: COLOURS.white,
        padding:4,
        borderRadius:10,
        borderColor: '#9999',
        borderWidth: 1,
        
    },
    iconBack2: {
        backgroundColor: COLOURS.white,
        padding:4,
        borderRadius:10,
        borderColor: '#9999',
        borderWidth: 1,
        width: 50,
        marginLeft: 20,
        position: 'absolute',
        left: 0,
        
    },
    icon: {
        width:25,
        height: 25,
        margin: 10
    },
    textHeader: {
        fontSize: 20,
        color: COLOURS.black,
        
        textAlign: 'center',
    },
    textHeader2: {
        fontSize: 20,
        color: COLOURS.black,
        
        textAlign: 'center',
        
    },
    chevronView:{
        position: 'absolute',
        left: 0,
        padding: 10
    },
    textCartHeader: {
        fontSize: 20,
        color: COLOURS.black,
        
        
    },
    text: {
        color: '#0F1828',
        
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 30,
        marginLeft: 24
    },
    badge: {
        position: 'absolute',
        top: 0,
        right:0,
        backgroundColor: '#E94242',
        width:18,
        height: 18,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chevron: {
        
        width: 30,
        height: 30,
        
        
    },
    languageText: {
        fontSize: 10,
        color: COLOURS.black
    },
    languageView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    radioView: {
        width: 60,
        height: 20,
        borderColor: COLOURS.black,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        
        padding: 2
    },
    radioContent: {
        width: 15,
        height: 15,
        backgroundColor: COLOURS.backgroundDark,
        borderRadius: 100,

    }
    
    
    
    
    
    
});
export default styles;