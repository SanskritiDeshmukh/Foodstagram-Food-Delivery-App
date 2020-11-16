import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import FoodItem from '../Components/FoodItem'

// Styles
import styles from './Styles/FoodScrepenStyles'
import { from } from 'rxjs'



export default class FoodScreen extends Component {

    componentWillMount(){
        const {navigation} = this.props;
        title = navigation.getParam('title', '');
        foodImages = navigation.getParam('foodImages', '');
        foodTitles = navigation.getParam('foodTitles', '');
        descriptions = navigation.getParam('foodDescriptions', '');
        prices = navigation.getParam('prices', '');
        foodSize = navigation.getParam('foodSize', '');
    }    

  render () {

    var foodItems = [];

    for(let i=0; i<foodSize; i++)
    {
        foodItems.push(
            <View>
                <FoodItem
                navigation={this.props.navigation}
                foodTitles={foodTitles[i]}
                price={prices[i]}
                foodImages={foodImages[i]}
                foodDescriptions={descriptions[i]}
                 />
            </View>
        )
    }

    return (

            <Container>
        <HeaderFood navigation={this.props.navigation}/>
        <Content style={styles.titleTextContent}>
            <Text style={styles.titleText}> {title} </Text>
        

            {foodItems}
        </Content>
            </Container>
     
    )
  }
}
  