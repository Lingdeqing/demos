import * as React from 'react';
import { Animated, View, Button, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    }
})


export default class Demo extends React.PureComponent {

    translateY = new Animated.Value(0)

    onPress = () => {
        Animated.decay(this.translateY, {
            duration: 500,
            velocity: 0.2, // 必填，不填报错
            deceleration: 0.999, // 越接近1，速度衰减的越慢

            // delay: 10000, // 无用
            // useNativeDriver: true,
            // isInteraction: true
        }).start(() => {
            console.log(this.translateY.__getValue())
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