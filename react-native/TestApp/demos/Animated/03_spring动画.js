import * as React from 'react';
import { Animated, View, Button, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default class Demo extends React.PureComponent {

    translateY = new Animated.Value(0)

    onPress = () => {
        this.translateY.setValue(0)
        Animated.spring(this.translateY, {
            duration: 1000,
            toValue: 100, 

            fraction: 800,    // 弹性
            tension: 200,   // 速度

            // bounciness: 20, // 弹性
            // speed: 12,  // 速度

            // stiffness: 100, // 可以很好的模拟弹簧震动
            // damping: 10,
            // mass: 10,

            // velocity: 10000,    // 初速度
            // overshootClamping: true, // 超出toValue部分不弹

            // restDisplacementThreshold: 0.00001  // 静止位置判定阈值 没啥用的样子
            // restSpeedThreshold: 10000,  // 静止速度判定阈值 没啥用的样子

            // delay: 1000, 
            useNativeDriver: true,
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