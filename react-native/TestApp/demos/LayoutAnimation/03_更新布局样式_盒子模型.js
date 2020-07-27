import * as React from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 48,
        marginTop: 30
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
                {/* aspectRatio */}
                <Text style={styles.title}>aspectRatio</Text>
                <Text style={styles.desc}>1 =&gt; 2</Text>
                <View style={{ height: 100, aspectRatio: active ? 2 : 1, backgroundColor: 'purple' }}></View>

                {/* borderWidth */}
                <Text style={styles.title}>borderWidth无效</Text>
                <Text style={styles.desc}>10 =&gt; 20</Text>
                <View style={{ width: 100, height: 100, borderWidth: active ? 20 :10, borderColor: 'purple' }}></View>

                {/* margin */}
                <Text style={styles.title}>margin</Text>
                <Text style={styles.desc}>0 =&gt; 100</Text>
                <View style={{ width: 100, height: 100, marginLeft: active ? 100: 0, backgroundColor: 'purple' }}></View>

                {/* padding */}
                <Text style={styles.title}>padding</Text>
                <Text style={styles.desc}>10 =&gt; 50</Text>
                <View style={{ width: 100, height: 100, paddingLeft: active ? 50: 10, backgroundColor: 'purple' }}>
                    <View style={{height: 100, backgroundColor: 'black'}}></View>
                </View>

                {/* maxWidth */}
                <Text style={styles.title}>maxWidth</Text>
                <Text style={styles.desc}>100 =&gt; 200</Text>
                <View style={{ width: 200, height: 100, maxWidth: active ? 200: 100, backgroundColor: 'purple' }}></View>

                <View style={{height: 50}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
};