import { StyleSheet } from 'react-native';
import { Commands } from 'react-native/Libraries/Components/TextInput/AndroidTextInputNativeComponent';
import { COLOURS } from '../../Components/database/Database';



const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
    },
    cardContainer2: {
        
        position: 'absolute',
        width: 70,
        height: 40,
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
          
      },
    renderView: {
        
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    renderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    container2: {
        width: '100%',
        height: '40%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    container3:{
        width: '100%',
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 16,
    },
    chevron: {
        width: 30,
        height: 30,
        padding: 20,
        backgroundColor: COLOURS.white,
        
    },
    chevron1: {
        width: 30,
        height: 30,
        
    },
    scrollIndicatorContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: 32,
    },
    scrollIndicator: {
        
        width: '16%',
        height: 2.4,
        backgroundColor: COLOURS.black,
        
        marginHorizontal: 4,
        borderRadius: 100,
          
    },
    blueContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 2
    },
    blueTxt: {
        color:COLOURS.blue, 
        fontSize: 12, 
        marginLeft: 8,
        fontWeight: '300',
        
        
    },
    productName: {
        width: '70%',
        fontSize: 25,
        color: COLOURS.black,
        marginBottom: 8

    },
    link: {
        width: 20,
        height: 20,
        
        
    },
    linkBtn: {
        backgroundColor: COLOURS.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderRadius: 100
    },
    productNameLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    description: {
        fontSize: 15,
        color: "gray",
        marginBottom: 10

    },
    adress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        alignItems: 'center',
        marginBottom: 10,
        
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
    camion: {
        backgroundColor: COLOURS.backgroundLight,
        padding: 16,
        borderRadius: 20
    },
    adressTxt: {
        fontSize: 16,
        color: "gray",
        width: 170,
        
        marginLeft: 10,
        
        
    },
    price: {
        fontSize: 22,
        fontWeight: '500',
        color: COLOURS.black,
        marginBottom: 16
    },
    container4: {
        padding: 35
    },
    button: {
        backgroundColor: COLOURS.blue,
        padding: 16,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    BtnText: {
        color: COLOURS.white,
        fontSize: 16,
        textAlign: 'center'
    },
    chevronBtn: {
        
    },
    imagesView: {
        position: 'absolute',
        
    },
    buttonsView: {
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    solde: {
        
        fontSize: 12,
        color: COLOURS.white,
        fontWeight: 'bold',
        letterSpacing: 1,
          
      },
    priceView: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    
});
export default styles;