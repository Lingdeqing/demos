import * as React from 'react';
import { Animated, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Demo extends React.PureComponent {

    aniVal = new Animated.Value(0)

    onPress = () => {
        this.aniVal.setValue(0)
        Animated.timing(this.aniVal, {
            toValue: 1,
            duration: 1000,
            // useNativeDriver: true
        }).start()
    }

    render() {
        return (
            <ScrollView>
                <Button title="动画" onPress={this.onPress}></Button>
                <Animated.View
                    style={{
                        width: 100, height: 100,
                        backgroundColor: this.aniVal.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['red', 'rgba(0,255,0,1)']
                        })
                    }}
                />
            </ScrollView>
        )
    }
};