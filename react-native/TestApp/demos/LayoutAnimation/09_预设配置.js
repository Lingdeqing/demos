import * as React from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 48,
        marginTop: 30,
    },
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    },
    normal: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    },
    active: {
        width: 200,
        height: 200,
        backgroundColor: 'purple'
    },
})


export default class Demo extends React.PureComponent {

    state = {
        active: false
    }

    onPress = () => {
        LayoutAnimation.configureNext(
            // LayoutAnimation.Presets.linear,
            // LayoutAnimation.Presets.spring,
            LayoutAnimation.Presets.easeInEaseOut,        
        )
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const { active } = this.state
        return (
            <SafeAreaView>
                <Button title="测试" onPress={this.onPress} />

                {/* create */}
                <Text style={styles.title}>create</Text>
                {active && <View style={styles.cube}></View>}

                {/* update */}
                <Text style={styles.title}>update</Text>
                <View style={active ? styles.active : styles.normal}></View>

            </SafeAreaView>
        )
    }
};