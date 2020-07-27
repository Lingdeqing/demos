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
                property: 'scaleXY', // scaleX, scaleY, opacity

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

                    {/* alignContent */}
                    <Text style={styles.title}>alignContent</Text>
                    <Text style={styles.desc}>flex-end =&gt; flex-start</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', borderWidth: 1, borderColor: 'blue', height: 180, alignItems: 'center', alignContent: active ? 'flex-start' : 'flex-end' }}>
                        <View style={{ width: 100, height: 30, backgroundColor: 'orange' }}></View>
                        <View style={{ width: 110, height: 40, backgroundColor: 'pink' }}></View>
                        <View style={{ width: 120, height: 30, backgroundColor: 'red' }}></View>
                        <View style={{ width: 130, height: 40, backgroundColor: 'cyan' }}></View>
                        <View style={{ width: 140, height: 30, backgroundColor: 'gray' }}></View>
                        <View style={{ width: 150, height: 40, backgroundColor: 'black' }}></View>
                    </View>

                    {/* alignItems */}
                    <Text style={styles.title}>alignItems</Text>
                    <Text style={styles.desc}>flex-end =&gt; flex-start</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: 'blue', height: 100, alignItems: active ? 'flex-start' : 'flex-end' }}>
                        <View style={{ width: 30, height: 30, backgroundColor: 'orange' }}></View>
                        <View style={{ width: 40, height: 40, backgroundColor: 'pink' }}></View>
                    </View>

                    {/* alignSelf */}
                    <Text style={styles.title}>alignSelf</Text>
                    <Text style={styles.desc}>flex-end =&gt; flex-start</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: 'blue', height: 100, alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, backgroundColor: 'orange', alignSelf: active ? 'flex-start' : 'flex-end' }}></View>
                    </View>

                    {/* flex */}
                    <Text style={styles.title}>flex</Text>
                    <Text style={styles.desc}>1 =&gt; 2</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: 'blue', height: 100, alignItems: active ? 'flex-start' : 'flex-end' }}>
                        <View style={{ flex: active ? 1 : 2, height: 30, backgroundColor: 'orange' }}></View>
                        <View style={{ flex: active ? 2 : 1, height: 40, backgroundColor: 'pink' }}></View>
                    </View>

                    {/* flexDirection */}
                    <Text style={styles.title}>flexDirection</Text>
                    <Text style={styles.desc}>row =&gt; column</Text>
                    <View style={{ flexDirection: active ? 'column' : 'row', justifyContent: 'space-around', borderWidth: 1, borderColor: 'blue', height: 100,}}>
                        <View style={{ width: 30, height: 30, backgroundColor: 'orange' }}></View>
                        <View style={{ width: 40, height: 40, backgroundColor: 'pink' }}></View>
                    </View>

                    {/* justifyContent */}
                    <Text style={styles.title}>justifyContent</Text>
                    <Text style={styles.desc}>flex-end =&gt; flex-start</Text>
                    <View style={{ flexDirection:'row', justifyContent:active ? 'flex-start' : 'space-around', borderWidth: 1, borderColor: 'blue', height: 100,}}>
                        <View style={{ width: 30, height: 30, backgroundColor: 'orange' }}></View>
                        <View style={{ width: 40, height: 40, backgroundColor: 'pink' }}></View>
                    </View>


                    <View style={{height: 50}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
};