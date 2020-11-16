import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Content, Text, SwipeRow, Button, Icon } from 'native-base'

import styles from '../Components/Styles/CartItemStyles'

export default class CartItem extends Component {

    render() {
        return (
            <View style={styles.itemContainer}>
                
                {/* <SwipeRow
                    disableRightSwipe
                    rightOpenValue={-100}
                    body={
                        <View>
                            <Text>{this.props.title}</Text>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />  */}

                <View style={styles.bodyContainer}>
                    
                    <Image 
                    source={require('../Images/Burger3.jpeg')}
                    style={styles.itemImage}
                    />
                       

                <View style={styles.itemTextContainer}>
                    
                    <Text style={styles.itemTitle}>
                        {this.props.title}
                    </Text>

                    <Text style={styles.itemPrice}>
                        50₹
                    </Text>

                </View>

                <View style={styles.itemCounterContainer}>
                    <Button
                        transparent 
                        onPress={() => {
                            alert('test');                        }}
                        >

                    <Icon name='arrow-dropup' style={styles.itemCountUp} />
                    </Button>

                    <Text style={styles.itemCountText}>
                        2
                    </Text>

                    <Button
                        transparent 
                        onPress={() => {
                            alert('test');                        }}
                        >

                    <Icon name='arrow-dropdown' style={styles.itemCountDown} />
                    </Button>


                </View>

                </View>
            </View>
        )
    }

}