import * as React from 'react';
import { View, Button, ScrollView, Text, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 48,
        marginTop: 30,
    },
    desc: {
        textAlign: 'center',
        fontSize: 15
    }
})


export default class Demo extends React.PureComponent {

    state = {
        active: false
    }

    onPress = () => {
        LayoutAnimation.configureNext({
            duration: 500,
            update: {
                type: 'linear', // linear|spring|easeIn|easeOut|easeInEaseOut
                // property: 'scaleXY', // scaleX, scaleY, opacity

                // springDamping: 0.3, 
                // initialVelocity: 0,
                // duration: 1000,
                // delay: 2000, 
            }
        })
        this.setState({
            active: true
        })
    }

    reset = () => {
        this.setState({
            active: false
        })
    }

    render() {
        const { active } = this.state
        return (
            <SafeAreaView>
                <Button title="测试" onPress={this.onPress} />
                <Button title="reset" onPress={this.reset} />

                <ScrollView>
                {/* direction */}
                <Text style={styles.title}>direction</Text>
                <Text style={styles.desc}>ltr =&gt; rtl</Text>
                <View style={{ direction: active ? 'rtl' : 'ltr', width: 150, height: 150, borderWidth: 1, borderColor: 'black' }}>
                    <View style={{ position: 'absolute', left: 0, top: 0, width: 80, height: 80, backgroundColor: 'pink' }}></View>
                </View>

                {/* overflow */}
                <Text style={styles.title}>overflow无效</Text>
                <Text style={styles.desc}>hidden =&gt; visible</Text>
                <View style={{ width: 200, height: 200, overflow: active ? 'visible': 'hidden', borderColor: 'purple', borderWidth: 1 }}>
                    <View style={{position: 'absolute', right: -50, top: -50, width: 100, height: 100, backgroundColor: 'black'}}></View>
                </View>

                {/* display */}
                <Text style={styles.title}>display</Text>
                <Text style={styles.desc}>none =&gt; flex</Text>
                <View style={{ width: 80, height: 80, backgroundColor: 'pink', display: active ? 'flex': 'none'  }}></View>

                {/* display */}
                <Text style={styles.title}>display</Text>
                <Text style={styles.desc}>flex =&gt; none</Text>
                <View style={{ width: 80, height: 80, backgroundColor: 'pink', display: active ? 'none': 'flex'  }}></View>

                <View style={{height: 100}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
};