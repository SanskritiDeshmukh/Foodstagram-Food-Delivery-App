import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { Drawer } from 'native-base'
import Sidebar from '../Containers/Sidebar'

// Styles
import styles from './Styles/LaunchScreenStyles'

import HeaderLanding from '../Components/HeaderLanding'
import PromoFoodItem from '../Components/PromoFoodItem'


let burgerImage = require('../Images/Burger3.jpeg');
let pizzaImage = require('../Images/Pizza.jpeg');
let sandwichImage = require('../Images/sandwich.jpeg');
let spaghettiImage = require('../Images/spaghetti.jpeg');
let momoImage = require('../Images/momos.jpg');

export default class LaunchScreen extends Component {

  closeDrawer = ()=> {
    this.drawer._root.close();
  }

  openDrawer = ()=> {
    this.drawer._root.open();
  }

  goToBurgers = ()=> {
          this.props.navigation.navigate('FoodScreen', {
          foodTitles: ["Veg Burger", "Cheese Burger", "Spicy Burger"],
          foodDescriptions: ["A Complete veg burger with vegies.", "Burger with Extra Cheese Mayonese", "Burgers with extra spice and red chillies."],
          prices: ["50", "60", "65"],
          foodImages: [burgerImage, burgerImage, burgerImage],
          foodSize: 5,
    });

    this.closeDrawer();

  }

  goToPizza = ()=> {
          this.props.navigation.navigate('FoodScreen', {
          foodTitles: ["Cheese Burst Pizza", "Corn Pizza", "Onion Pizza"],
          foodDescriptions: ["Pizza with extra cheese and peproni.", "Corn and olives toppings", "Onion and Capsicum toppings"],
          prices: ["150", "160", "165"],
          foodImages: [pizzaImage, pizzaImage, pizzaImage],
          foodSize: 5,
          
    });

    this.closeDrawer();

  }

  render () {

    const {navigate} = this.props.navigation;

    return (

      <Drawer
          ref={(ref)=> {this.drawer = ref; }}
          content={
            <Sidebar 
              goToBurgers={this.goToBurgers}
              goToPizza={this.goToPizza}
              goToMomos={this.goToMomos}

            />
          }
          
          onClose={()=> this.closeDrawer()}
          >
      <View style={styles.mainContainer}>
        <HeaderLanding openDrawer={this.openDrawer} navigation={this.props.navigation}/>
        <ScrollView>

        <PromoFoodItem 
          navigation={navigate}
          image={burgerImage}
          foodTitles={["Veg Burger", "Cheese Burger", "Spicy Burger"]}
          foodDescriptions={["A Complete veg burger with vegies.", "Burger with Extra Cheese Mayonese", "Burgers with extra spice and red chillies."]}
          prices={["50", "60", "65"]}
          images={[burgerImage, burgerImage, burgerImage]}
          foodSize={5}
          text={"BURGERS"}/>

          <PromoFoodItem 
          navigation={navigate}
          image={pizzaImage}
          foodTitles={["Cheese Burst Pizza", "Corn Pizza", "Onion Pizza"]}
          foodDescriptions={["Pizza with extra cheese and peproni.", "Corn and olives toppings", "Onion and Capsicum toppings"]}
          prices={["150", "160", "165"]}
          images={[pizzaImage, pizzaImage, pizzaImage]}
          foodSize={5}
          text={"PIZZA"}/>

          <PromoFoodItem 
          navigation={navigate}
          image={sandwichImage}
          text={"SANDWICH"}/>
          
          <PromoFoodItem 
          navigation={navigate}
          image={spaghettiImage}
          text={"SPAGHETTI"}/>

          <PromoFoodItem 
          navigation={navigate}
          image={momoImage}
          text={"MOMOS"}/>

          <PromoFoodItem 
          navigation={navigate}
          image={sandwichImage}
          text={"SANDWICH"}/>

        </ScrollView>

        
      </View>
      </Drawer>
    )
  }
}
  