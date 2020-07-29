import * as React from 'react';
import { View, Button, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';

const styles = StyleSheet.create({
    normal: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    },
    active: {
        width: 200,
        height: 200,
        backgroundColor: 'purple'
    },
})


export default class Demo extends React.PureComponent {

    state = {
        active: false
    }

    onPress = () => {
        LayoutAnimation.configureNext({
            duration: 500,
            update: {
                type: 'linear', // linear|spring|easeIn|easeOut|easeInEaseOut
                
                // springDamping: 0.3, 
                // initialVelocity: 0,
                // duration: 1000,
                // delay: 2000, 
            }
        })
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        const {active} = this.state
        return (
            <SafeAreaView>
                <View style={active ? styles.active : styles.normal}></View>
                <Button title="测试" onPress={this.onPress}/>
            </SafeAreaView>
        )
    }
};