import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, View, Text, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LayoutAnimation1 from "./demos/LayoutAnimation/01_创建节点";
import LayoutAnimation1_1 from "./demos/LayoutAnimation/01_删除节点";
import LayoutAnimation2 from "./demos/LayoutAnimation/02_更新布局样式_宽高";
import LayoutAnimation3 from "./demos/LayoutAnimation/03_更新布局样式_盒子模型";
import LayoutAnimation4 from "./demos/LayoutAnimation/04_更新布局样式_flex";
import LayoutAnimation5 from "./demos/LayoutAnimation/05_更新布局样式_定位";
import LayoutAnimation6 from "./demos/LayoutAnimation/06_更新布局样式_其他";
import LayoutAnimation7 from "./demos/LayoutAnimation/07_create快捷函数";
import LayoutAnimation8 from "./demos/LayoutAnimation/08_预设配置";
import LayoutAnimation9 from "./demos/LayoutAnimation/09_使用setNativeProps更新布局样式";


import Animated1 from "./demos/Animated/01_timing动画";
import Animated2 from "./demos/Animated/02_decay动画";
import Animated3 from "./demos/Animated/03_spring动画";
import Animated4 from "./demos/Animated/04_值映射_一个动画值控制多个样式和节点";
import Animated5 from "./demos/Animated/05_值映射_控制角度";
import Animated6 from "./demos/Animated/06_值映射_控制颜色";
import Animated7 from "./demos/Animated/07_值映射_超出策略";
import Animated7_1 from "./demos/Animated/07_值映射_转换css动画";
import Animated8 from "./demos/Animated/08_组合动画_顺序执行";
import Animated9 from "./demos/Animated/09_组合动画_间隔执行";
import Animated10 from "./demos/Animated/10_组合动画_同时执行";
import Animated11 from "./demos/Animated/11_组合动画_循环执行";
import Animated12 from "./demos/Animated/12_组合动画_任意组合";
import Animated13 from "./demos/Animated/13_isInteraction参数";
import Animated14 from "./demos/Animated/14_useNativeDriver";


const LayoutAnimationRoutes = [
  {
    name: '01_创建节点',
    component: LayoutAnimation1,
  },
  {
    name: '01_删除节点',
    component: LayoutAnimation1_1,
  },
  {
    name: '02_更新布局样式_宽高',
    component: LayoutAnimation2,
  },
  {
    name: '03_更新布局样式_盒子模型',
    component: LayoutAnimation3,
  },
  {
    name: '04_更新布局样式_flex',
    component: LayoutAnimation4,
  },
  {
    name: '05_更新布局样式_定位',
    component: LayoutAnimation5,
  },
  {
    name: '06_更新布局样式_其他',
    component: LayoutAnimation6,
  },
  {
    name: '07_create快捷函数',
    component: LayoutAnimation7,
  },
  {
    name: '08_预设配置',
    component: LayoutAnimation8,
  },
  {
    name: '09_使用setNativeProps更新布局样式',
    component: LayoutAnimation9,
  },
]

const AnimatedRoutes = [
  {
    name: '01_timing动画',
    component: Animated1,
  },
  {
    name: '02_decay动画',
    component: Animated2,
  },
  {
    name: '03_spring动画',
    component: Animated3,
  },
  {
    name: '04_值映射_一个动画值控制多个样式和节点',
    component: Animated4,
  },
  {
    name: '05_值映射_控制角度',
    component: Animated5,
  },
  {
    name: '06_值映射_控制颜色',
    component: Animated6,
  },
  {
    name: '07_值映射_超出策略',
    component: Animated7,
  },
  {
    name: '07_值映射_转换css动画',
    component: Animated7_1,
  },
  {
    name: '08_组合动画_顺序执行',
    component: Animated8,
  },
  {
    name: '09_组合动画_间隔执行',
    component: Animated9,
  },
  {
    name: '10_组合动画_同时执行',
    component: Animated10,
  },
  {
    name: '11_组合动画_循环执行',
    component: Animated11,
  },
  {
    name: '12_组合动画_任意组合',
    component: Animated12,
  },
  {
    name: '13_isInteraction参数',
    component: Animated13,
  },
  {
    name: '14_useNativeDriver',
    component: Animated14,
  },
]

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1,  }} contentContainerStyle={{alignItems: 'flex-start'}}>
      <Text style={{ fontSize: 30, lineHeight: 50, paddingLeft: 10, paddingTop: 50 }}>LayoutAnimation</Text>
      {
        LayoutAnimationRoutes.map((route) => {
          return (
            <Button
              key={route.name}
              title={route.name}
              onPress={() => navigation.navigate(route.name)}
            />
          )
        })
      }

      <Text style={{ fontSize: 30, lineHeight: 50, paddingLeft: 10, paddingTop: 50 }}>Animated</Text>
      {
        AnimatedRoutes.map((route) => {
          return (
            <Button
              key={route.name}
              title={route.name}
              onPress={() => navigation.navigate(route.name)}
            />
          )
        })
      }


      <View style={{height: 100}}></View>
    </ScrollView>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {
          LayoutAnimationRoutes.map((route) => {
            return (
              <Stack.Screen key={route.name} name={route.name} component={route.component} />
            )
          })
        }
        {
          AnimatedRoutes.map((route) => {
            return (
              <Stack.Screen key={route.name} name={route.name} component={route.component} />
            )
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;