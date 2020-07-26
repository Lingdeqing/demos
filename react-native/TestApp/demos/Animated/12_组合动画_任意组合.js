import * as React from 'react';
import { Animated, View, Easing, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends React.PureComponent {
    translateX = new Animated.Value(0)
    translateY = new Animated.Value(0)
    rotate = new Animated.Value(0)

    onPress = () => {
        this.translateY.setValue(0)
        this.translateX.setValue(0)
        this.rotate.setValue(0)

        Animated.parallel([
            Animated.loop(Animated.timing(this.rotate, {
                duration: 500,
                easing: Easing.linear,
                toValue: 1,
            })),
            Animated.sequence([
                Animated.timing(this.translateY, {
                    duration: 3000,
                    easing: Easing.linear,
                    toValue: 500,
                }),
                Animated.delay(2000),
                Animated.timing(this.translateX, {
                    duration: 1500,
                    toValue: 300,
                }),
                Animated.delay(2000),
                Animated.timing(this.translateY, {
                    duration: 3000,
                    easing: Easing.linear,
                    toValue: 0,
                }),
                Animated.delay(2000),
                Animated.timing(this.translateX, {
                    duration: 1500,
                    toValue: 0,
                })
            ]),
        ]).start()
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <View style={{ flex: 1 }}>
                    <Animated.Image
                        style={{
                            width: 100, height: 100, transform: [{
                                translateY: this.translateY
                            }, {
                                translateX: this.translateX
                            }, {
                                rotate: this.rotate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg']
                                })
                            }]
                        }}
                        resizeMode="stretch"
                        source={{
                            uri: 'https://img.youpin.mi-img.com/content/8951ec59d22a97792c1c7499bf7bcfd8.jpg'
                        }}>
                    </Animated.Image>
                </View>
            </ScrollView>
        )
    }
};