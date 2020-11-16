import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Text } from 'native-base'

import styles from '../Containers/Styles/CartStyles'
import HeaderFood from '../Components/HeaderFood'
import CartItem from '../Components/CartItem'


export default class Cart extends Component{

    render() {
        return(
            <View>
                <HeaderFood navigation={this.props.navigation}/>
                <View style={styles.parentView}>
                    <Content>

                        <CartItem title={'BBQ Burger'} /> 
                        <CartItem title={'Pizza'} /> 
                        <CartItem title={'BBQ Burger'} /> 
                        <CartItem title={'BBQ Burger'} /> 
                        <CartItem title={'BBQ Burger'} />  

                    </Content>

                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>Total:</Text>
                    </View> 
                </View>
            </View>
        )
    }

}