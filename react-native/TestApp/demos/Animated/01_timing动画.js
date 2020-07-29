import * as React from 'react';
import { Animated, View, Easing, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends React.PureComponent {

    translateY = new Animated.Value(0)

    onPress = () => {
        this.translateY.setValue(0)
        Animated.timing(this.translateY, {
            duration: 500,
            toValue: 100,
            easing: (n) => {
                if (n > 0.5) return 1 - n
                return n
            }  // Easing.inOut(Easing.ease) , Easing.linear, Easing.quad, Easing.cubic

            // delay: 1000,
            // useNativeDriver: true,
            // isInteraction: true
        }).start(() => {

        })
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.Image
                        style={{
                            width: 100, height: 100, transform: [{
                                translateY: this.translateY
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