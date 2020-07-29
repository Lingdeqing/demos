import * as React from 'react';
import { View, Easing, Button, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Animated from "./Animated";

export default class Demo extends React.PureComponent {

    translateY = new Animated.Value(0)

    onPress = () => {
        this.translateY.setValue(0)
        Animated.timing(this.translateY, {
            duration: 500,
            toValue: 100,
            useNativeDriver: true
        }).start()
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.View
                        style={{
                            width: 100, height: 100, backgroundColor: 'pink',
                            transform: [
                                {
                                    translateY: this.translateY
                                }
                            ]
                        }}
                        >
                    </Animated.View>
                </View>
            </ScrollView>
        )
    }
};