import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

let height = Dimensions.get('window').height;

export default StyleSheet.create({

    foodItemView:
    {
        width: '100%',
        height: height/4,
        paddingLeft: '5%',
        paddingRight: '5%',

    },

    priceView:{
        backgroundColor: 'rgb(65,186,32)',
        height: '20%',
        width: '30%',
        borderRadius: 8,
        justifyContent: 'center',
        zIndex: 5,
        marginTop: '1.5%',
        marginLeft: '-2%',
    },

    priceText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '400',
        fontSize: 24,
        
    },

    foodImageView:{
        width: '60%',
        height: '70%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '18%', 
        
    },

    foodImages:{
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    foodDescriptionView:{
        height: '60%',
        width: '60%',
        marginLeft: '50%',
        position: 'absolute',
        zIndex: -1,
        borderRadius: 30,
        marginTop: '2%',
        backgroundColor: '#f4f4f4',
    },

    foodTextView:{
        height: '40%',
        width: '90%',
        position: 'absolute',
        marginLeft: '10%',
        zIndex: 5,
    },

    foodTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,

    },
    
    foodDescriptionText:{
        textAlign: 'center',
        fontWeight: '400',
        paddingTop: 5,
        color: 'black',

    },


   
})
