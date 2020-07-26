import * as React from 'react';
import { Animated, View, Text, Button, InteractionManager } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends React.PureComponent {

    translateY = new Animated.Value(0)

    state = {
        count: 1
    }

    onPress = () => {
        this.translateY.setValue(0)
        Animated.timing(this.translateY, {
            duration: 1000,
            toValue: 100,

            // isInteraction: false
        }).start(() => {

        })
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                count: this.state.count + 1
            })
        })
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <Text style={{fontSize: 40}}>count: {this.state.count}</Text>
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