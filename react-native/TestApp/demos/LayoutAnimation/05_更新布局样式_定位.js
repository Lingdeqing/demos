import * as React from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet, LayoutAnimation } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 48,
        marginTop: 30
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
            active: !this.state.active
        })
    }

    render() {
        const { active } = this.state
        return (
            <SafeAreaView>
                <Button title="测试" onPress={this.onPress} />
                <ScrollView>

                {/* top */}
                <Text style={styles.title}>指定宽高，修改top</Text>
                <View style={{ width: 150, height: 150, borderWidth: 1, borderColor: 'black' }}>
                    <View style={{position: 'absolute', left: 0, top: active ? 100 : 0 , width: 80, height: 80, backgroundColor: 'pink' }}></View>
                </View>

                {/* top */}
                <Text style={styles.title}>不指定宽高，修改top</Text>
                <View style={{ width: 150, height: 150, borderWidth: 1, borderColor: 'black' }}>
                    <View style={{position: 'absolute', left: 0, right: 0, top: active ? 100 : 0 ,bottom: 0, backgroundColor: 'pink' }}></View>
                </View>

                {/* position */}
                <Text style={styles.title}>position</Text>
                <View style={{ width: 150, height: 150, borderWidth: 1, borderColor: 'black' }}>
                    <View style={{position: active ? 'absolute' : 'relative' , left: 50, top: 0 , width: 80, height: 80, backgroundColor: 'pink', zIndex: 1 }}></View>
                    <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
                </View>

                {/* zIndex */}
                <Text style={styles.title}>zIndex无效</Text>
                <View style={{ width: 150, height: 150, borderWidth: 1, borderColor: 'black' }}>
                    <View style={{position: 'absolute' , left: 50, top: 0 , width: 80, height: 80, backgroundColor: 'pink', zIndex: active ? 1: 0 }}></View>
                    <View style={{width: 80, height: 80, backgroundColor: 'red'}}></View>
                </View>

                <View style={{height: 50}}></View>
                </ScrollView>

            </SafeAreaView>
        )
    }
};