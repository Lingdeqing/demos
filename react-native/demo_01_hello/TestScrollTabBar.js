import React from 'react';
import {
  Text,
  View
} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default () => {
  return <View>
    <Text>1212121</Text>
  </View>
  return <ScrollableTabView
    style={{ marginTop: 20 }}
    initialPage={1}
    locked={true}
    onScroll={() => console.log('滚动啦')}
    renderTabBar={() => <DefaultTabBar />}
  >
    <Text tabLabel='Tab #1'>My</Text>
    <Text tabLabel='Tab #2'>favorite</Text>
    <Text tabLabel='Tab #3'>project</Text>
  </ScrollableTabView>;
}