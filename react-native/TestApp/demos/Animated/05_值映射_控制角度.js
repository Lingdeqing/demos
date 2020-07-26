import * as React from 'react';
import { Animated, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Demo extends React.PureComponent {

    aniVal = new Animated.Value(0)

    onPress = () => {
        this.aniVal.setValue(0)
        Animated.timing(this.aniVal, {
            toValue: 1,
            duration: 500
        }).start()
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <Animated.Image
                    style={{
                        width: 100, height: 100,
                        transform: [{
                            rotate: this.aniVal.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg']
                            })
                        }]
                    }}
                    resizeMode="stretch"
                    source={{
                        uri: 'https://img.youpin.mi-img.com/content/8951ec59d22a97792c1c7499bf7bcfd8.jpg'
                    }}
                />
            </ScrollView>
        )
    }
};