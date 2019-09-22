/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  state = {
    input: '',
    animateBackgroundColor: new Animated.Value('red'),
    animateHeight: new Animated.Value(200),
    animateWidth: new Animated.Value(200),

    animateOpacity: new Animated.Value(0),
    animateTop: new Animated.Value(100)
  }
  onInput = (text) => {
    this.setState({
      input: text
    })
  }
  render() {
    return <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="blue" hidden={true} networkActivityIndicatorVisible={false}/>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TextInput onChangeText={this.onInput} value={this.state.input} />
          <Text>{this.state.input.split('').map(i => '🐶')}</Text>
          <Button title="click" color="red" onPress={() => alert('哈哈哈')} />
          <TouchableWithoutFeedback onPress={() => alert('呵呵呵')}>
            <Text>无反馈按钮</Text>
          </TouchableWithoutFeedback>
          <ScrollView style={{ height: 200 }}>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
            <View><Text>1</Text></View>
            <View><Text>2</Text></View>
            <View><Text>3</Text></View>
            <View><Text>4</Text></View>
          </ScrollView>
        </ScrollView>
        <Text>测试动画</Text>
        <Button onPress={() => {
          this.animation = Animated.timing(                  // 随时间变化而执行动画
            this.state.animateHeight,            // 动画中的变量值
            {
              toValue: 400,                   // 透明度最终变为1，即完全不透明
              duration: 2000,              // 让动画持续一段时间
            }
          );
          Animated.sequence([
            this.animation,
            Animated.timing(
              this.state.animateWidth,
              {
                toValue: 400,
                duration: 2000
              })
          ]).start();
          // Animated.parallel([
          //   this.animation,
          //   Animated.timing(
          //     this.state.animateOpacity,
          //     {
          //       toValue: 0.1,
          //       duration: 2000
          //   })
          // ], {
          //   stopTogether: false
          // }).start();
          // this.animation.start();
        }} title="开始" />
        <Button onPress={() => {
          this.animation.stop();
        }} title="暂停" />
        <Animated.View style={{
          width: this.state.animateWidth,
          height: this.state.animateHeight,
          backgroundColor: 'red',
          opacity: 1
        }} />
        <Button onPress={() => {
          Animated.sequence([
            Animated.parallel([
              Animated.timing(this.state.animateOpacity, {
                toValue: 1,
                duration: 200
              }),
              Animated.timing(this.state.animateTop, {
                toValue: 200,
                duration: 200
              })
            ]),
            Animated.parallel([
              Animated.timing(this.state.animateOpacity, {
                delay: 1000,
                toValue: 0,
                duration: 200
              }),
              Animated.timing(this.state.animateTop, {
                delay: 1000,
                toValue: 100,
                duration: 200
              })
            ]),
          ]).start();
        }} title="tip动画开始" />
        <Animated.View style={{
          position: 'absolute',
          top: this.state.animateTop,
          opacity: this.state.animateOpacity,
          left: '50%',
          marginLeft: -150,
          width: 300,
          height: 80,
          backgroundColor: 'orange'
        }} />
      </SafeAreaView>
    </Fragment>;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
