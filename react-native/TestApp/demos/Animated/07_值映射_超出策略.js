import * as React from 'react';
import { Animated, View, ScrollView, Button } from 'react-native';


export default class Demo extends React.PureComponent {

    aniVal = new Animated.Value(0)

    onPress = () => {
        this.aniVal.setValue(-1)
        Animated.timing(this.aniVal, {
            toValue: 2,
            duration: 500
        }).start()
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <View style={{height: 202, borderWidth: 1, borderColor: 'black', alignItems: 'center'}}>
                    <Animated.Image
                        style={{
                            width: 100, height: 100,
                            transform: [{
                                translateY: this.aniVal.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 100],
                                    // extrapolate: 'clamp', // 截断
                                    // extrapolateLeft: 'clamp',
                                    // extrapolateRight: 'clamp',
                                    // extrapolateRight: 'identity', // 使用输入值
                                })
                            }]
                        }}
                        resizeMode="stretch"
                        source={{
                            uri: 'https://img.youpin.mi-img.com/content/8951ec59d22a97792c1c7499bf7bcfd8.jpg'
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
};