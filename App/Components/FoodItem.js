import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/FoodItemStyles'
import FoodScreen from '../Containers/FoodScreen'

export default class FoodItem extends Component {
  render () {

    return (
        <TouchableOpacity onPress={()=> {
           //this.props.navigation.navigate('FoodDetails');
            }}>
            <View style={styles.foodItemView}>
                <View style={styles.priceView}>
                    <Text style={styles.priceText}> {this.props.price}₹ </Text>
                </View>

                <View style={styles.foodImageView}>
                    <Image style={styles.foodImages} source={this.props.foodImages} />
                </View>

                <View style={styles.foodDescriptionView}>
                    <View style={styles.foodTextView}>
                        <Text style={styles.foodTitle}> {this.props.foodTitles} </Text>
                        <Text style={styles.foodDescriptionText}> {this.props.foodDescriptions} </Text>
                    </View>
                </View>

            </View>
     
        </TouchableOpacity>
    )
  }
}
  