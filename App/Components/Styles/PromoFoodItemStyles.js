import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

let height = Dimensions.get('window').height;

export default StyleSheet.create({
    foodCart:
    {
        height: height/2,
    },

    promoImage:
    {
        
    },

    textView:
    {
        justifyContent: 'center',
        width:'100%',
        height: '100%',
        position: 'absolute'
    },

    foodTitle:
    {
        fontSize: 36,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: '20%',
        marginRight: '20%',
        borderRadius: 10,
        paddingBottom: '5%',
        paddingTop: '5%',
    },
    
})
