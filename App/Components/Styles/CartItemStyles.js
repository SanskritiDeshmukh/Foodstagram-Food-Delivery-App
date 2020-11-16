import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes/'
import { Row } from 'native-base'

export default StyleSheet.create({

    itemContainer:{
        height: 150,
        width: '100%',
    },

    bodyContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 3,
        width: '100%',
    },

    itemImage:{
        width: 100,
        height: 100,
        borderRadius: 20,
    },

    itemTextContainer:{
        marginRight: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        height: 100,

    },

    itemTitle:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },

    itemPrice:{
        color: 'grey',
        fontSize: 14,
    },

    itemCounterContainer:{
        position: 'absolute',
        right: 0,
        height: '100%',
        width: 70,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    itemCountUp:{
        fontSize: 30,
        color: 'green',

    },

    itemCountDown:{
        fontSize: 30,
        color: 'grey',
    },

    itemCountText:{
        fontSize: 15,
        color: 'black',
        marginLeft: 20,

    },



})
