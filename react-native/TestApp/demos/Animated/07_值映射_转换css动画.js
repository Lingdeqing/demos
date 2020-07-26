import * as React from 'react';
import { Animated, Easing, View, ScrollView, Button } from 'react-native';


// https://github.com/animate-css/animate.css/blob/master/animate.css#L930
// backInLeft效果 https://animate.style/
/**
.animate__animated {
  animation-duration: 1s;
}
.animate__backInLeft {
  animation-name: backInLeft;
}
@keyframes backInLeft {
  0% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
 */
export default class Demo extends React.PureComponent {

    aniVal = new Animated.Value(0)

    onPress = () => {
        this.aniVal.setValue(0)
        Animated.timing(this.aniVal, {
            toValue: 100,
            easing: Easing.ease,
            duration: 500
        }).start()
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <View style={{ height: 202, borderWidth: 1, borderColor: 'black', alignItems: 'center' }}>
                    <Animated.Image
                        style={{
                            width: 100, height: 100,
                            transform: [{
                                translateX: this.aniVal.interpolate({
                                    inputRange: [0, 80, 100],
                                    outputRange: [-250, 0, 0],
                                })
                            }, {
                                scale: this.aniVal.interpolate({
                                    inputRange: [0, 80, 100],
                                    outputRange: [0.7, 0.7, 1],
                                })
                            }],
                            opacity: this.aniVal.interpolate({
                                inputRange: [0, 80, 100],
                                outputRange: [0.7, 0.7, 1],
                            })
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