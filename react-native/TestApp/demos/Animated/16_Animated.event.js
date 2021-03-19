import * as React from 'react';
import { Animated, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Demo extends React.PureComponent {

    scrollY = new Animated.Value(0)

    render() {
        return (
            <ScrollView onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                {
                    useNativeDriver: false,
                    listener: (e) => {
                        console.log('滚动啦')
                    },
                }
            )}>
                <Animated.View style={{
                    width: this.scrollY.interpolate({
                        inputRange: [0, 1000],
                        outputRange: [0, 300]
                    }), height: 100, backgroundColor: 'pink'
                }} />
                <View style={{ height: 1000 }} />
            </ScrollView>
        )
    }
};