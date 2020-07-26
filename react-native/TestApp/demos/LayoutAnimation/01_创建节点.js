import * as React from 'react';
import { View, Button, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';

const styles = StyleSheet.create({
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    }
})


export default class Demo extends React.PureComponent {

    state = {
        show: false
    }

    onPress = () => {
        LayoutAnimation.configureNext({
            duration: 1000,
            create: {
                type: 'linear', // linear|spring|easeIn|easeOut|easeInEaseOut
                property: 'scaleXY', // scaleX, scaleY, opacity

                // springDamping: 0.3, 
                // initialVelocity: 0,
                // duration: 1000,
                // delay: 2000, 
            }
        })
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const { show } = this.state
        return (
            <SafeAreaView>
                {show && <View style={styles.cube}></View>}
                <View style={[styles.cube, show ? null : { display: 'none' }]}></View>
                <Button title="测试" onPress={this.onPress} />
            </SafeAreaView>
        )
    }
};