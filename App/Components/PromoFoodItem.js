import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/PromoFoodItemStyles'

let foodItemOne = require('../Images/Burger3.jpeg');

export default class PromoFoodItem extends Component {
  render () {

    return (
        <TouchableOpacity onPress={()=> this.props.navigation("FoodScreen",{
          title: this.props.text,
          foodImages: this.props.images,
          foodTitles: this.props.foodTitles,
          foodDescriptions: this.props.foodDescriptions,
          prices: this.props.prices,
          foodSize: this.props.foodSize,
        })}>
      <View style={styles.foodCart}>
        <View>
            <Image style={styles.promoImage} source={this.props.image} resizeMode={'contain'} />
        </View>

        <View style={styles.textView}>
            <Text style={styles.foodTitle}> {this.props.text} </Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}
  