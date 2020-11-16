import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
    headerStyle:
    {
        backgroundColor:'orange',
        textAlign: 'center',
        justifyContent: 'center',
    },

    iconStyle:
    {
        color: 'black',

    },

    titleText:
    {
        fontSize: 21,
        fontWeight: '400',
        fontStyle: 'italic',
    },

    headerContainer:
    {
        height: '8%',
        flex: 0,
        zIndex: 5,
    },


})
