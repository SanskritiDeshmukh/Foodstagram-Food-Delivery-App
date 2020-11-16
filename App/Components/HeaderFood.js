import React, { Component } from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from '../Components/Styles/HeaderScreenStyles'
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base'

export default class HeaderLanding extends Component {
  render () {
    return (
      <Container style={styles.headerContainer}>
          <Header style={styles.headerStyle}>
            <Left>
                <Button transparent onPress={()=> this.props.navigation.goBack()}>
                    <Icon style={styles.iconStyle} type="Ionicons" name="md-arrow-round-back" />
                </Button>
            </Left>

            <Body>
                <Text style={styles.titleText}> Foodstagram </Text>
            </Body>

            <Right>
                <Button transparent onPress={()=> this.props.navigation.navigate('Cart')}>
                    <Icon style={styles.iconStyle} type="FontAwesome5" name="shopping-cart" />
                </Button>
            </Right>
          </Header>
      </Container>
    )
  }
}
