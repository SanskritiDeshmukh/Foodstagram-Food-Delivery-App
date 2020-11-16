import React from 'react'
import { Container, List, ListItem, Left, Icon, Body } from 'native-base'
import { Text } from 'react-native'


export default class Sidebar extends React.Component{
    render() {
        return(
            <Container style={{
                backgroundColor: 'white',
            }}>
            
            <List>
                <ListItem itemDIvider>
                    <Text>Food</Text>
                </ListItem>

                <ListItem button onPress={this.props.goToBurgers}>
                    <Left>
                        <Icon type="MaterialCommunityIcons" name="hamburger" style={{fontSize: 22 }}/>
                    </Left>

                    <Body>
                        <Text>BURGERS</Text>
                    </Body>
                </ListItem> 

                <ListItem button onPress={this.props.goToPizza}>
                    <Left>
                        <Icon type="Ionicons" name="md-pizza" style={{fontSize: 22 }}/>
                    </Left>

                    <Body>
                        <Text>PIZZA</Text>
                    </Body>
                </ListItem> 

                <ListItem button onPress={this.props.goToMomos}>
                    <Left>
                        <Icon type="Entypo" name="bowl" style={{fontSize: 22 }}/>
                    </Left>

                    <Body>
                        <Text>MOMOS</Text>
                    </Body>
                </ListItem>

                <ListItem itemDIvider>
                    <Text>Drinks</Text>
                </ListItem> 

                <ListItem button onPress={this.props.goToDrink}>
                    <Left>
                        <Icon type="Entypo" name="drink" style={{fontSize: 22 }}/>
                    </Left>

                    <Body>
                        <Text>COCKTAILS</Text>
                    </Body>
                </ListItem>
 


                
            </List>
                
            </Container>
        )
    }
}


