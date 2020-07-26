import * as React from 'react';
import { Animated, View, Easing, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends React.PureComponent {

    translateX = new Animated.Value(0)
    translateY = new Animated.Value(0)
    scale = new Animated.Value(1)

    onPress = () => {
        this.translateX.setValue(0)
        this.translateY.setValue(0)
        this.scale.setValue(1)
        Animated.stagger(2000, [
            Animated.timing(this.translateX, {
                duration: 500,
                toValue: 100,
            }),
            Animated.timing(this.translateY, {
                duration: 500,
                toValue: 100,
            }),
            Animated.timing(this.scale, {
                duration: 500,
                toValue: 2,
            }),
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
                                translateX: this.translateX
                            }, {
                                translateY: this.translateY
                            }, {
                                scale: this.scale
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