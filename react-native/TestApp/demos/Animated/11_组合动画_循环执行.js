import * as React from 'react';
import { Animated, View, Easing, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends React.PureComponent {

    translateX = new Animated.Value(0)

    onPress = () => {
        this.translateX.setValue(0)
        Animated.loop(
            Animated.timing(this.translateX, {
                duration: 500,
                toValue: 100,
                isInteraction: false,   // 设置为false，防止在InteractionManager队列完成后执行的任务无法得到执行
            }),
            {
                // resetBeforeIteration: false, // 循环前重置为初始状态
                iterations: 4// 循环次数
            }
        ).start()
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