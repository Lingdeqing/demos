import * as React from 'react';
import { View, Button, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';

const styles = StyleSheet.create({
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    }
})


export default class Demo extends React.PureComponent {

    onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
        this.viewRef.setNativeProps({
            style: {
                width: 200,
                height: 200
            }
        })
    }

    render(){
        return (
            <SafeAreaView>
                <View ref={ref => this.viewRef = ref} style={styles.cube}></View>
                <Button title="测试" onPress={this.onPress}/>
            </SafeAreaView>
        )
    }
};