import * as React from 'react';
import { View, Button, SafeAreaView, StyleSheet, LayoutAnimation, Text } from 'react-native';

const styles = StyleSheet.create({
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cubeTitle: { 
        fontSize: 20, 
        lineHeight: 30, 
        color: '#fff' 
    }
})


export default class Demo extends React.PureComponent {

    state = {
        show: true
    }

    onPress = () => {
        LayoutAnimation.configureNext({
            duration: 1000,
            delete: {
                type: 'linear', // linear|spring|easeIn|easeOut|easeInEaseOut
                property: 'scaleXY', // scaleX, scaleY, opacity

                // springDamping: 0.3, 
                // initialVelocity: 0,
                // duration: 1000,
                // delay: 2000, 
            }
        })
        this.setState({
            show: false
        })
    }

    reset = () => {
        this.setState({
            show: true
        })
    }

    render() {
        const { show } = this.state
        return (
            <SafeAreaView>
                <Button title="删除节点" onPress={this.onPress} />
                <Button title="reset" onPress={this.reset} />

                {show &&
                    <View style={styles.cube}>
                        <Text style={styles.cubeTitle}>删除节点</Text>
                    </View>
                }
                {/* <View style={[styles.cube, show ? null : { display: 'none' }]}>
                    <Text style={styles.cubeTitle}>隐藏节点</Text>
                </View> */}
            </SafeAreaView>
        )
    }
};