import React, { createContext, useContext, useState, memo } from "react"
const initialState = { m: 100, n: 50 }; // 定义初始state​
const X = createContext({}); // 创建Context​
let a = 0;

export default function TestContext() {
  console.log(`render了${a}次`);//用来检查执行App函数多少次​
  const [state, setState] = useState(initialState); // 创建state读写接口​
  a += 1;
  return (
    <X.Provider value={{ state, setState }}> // 通过provider提供value给包围里内部组件，只有包围里的组件才有效
      <Father></Father>
    </X.Provider>
  );
}

const Father = (props) => {
  const { state, setState } = useContext(X);//拿到 名字为X的上下文的value，用两个变量来接收读写接口​
  const addN = () => {
    setState((state) => {
      return { ...state, n: state.n + 1 };
    });
  };
  const addM = () => {
    setState((state) => {
      return { ...state, m: state.m + 1 };
    });
  };
  return (
    <div>
      爸爸组件
      <div>n:{state.n}</div>
      <ChildWrapper />
      <button onClick={addN}>设置n</button>
      <button onClick={addM}>设置m</button>
    </div>
  );
};

const ChildWrapper = (() => {
  return (
    <div>
      <Child />
    </div>
  );
})

const Child = memo((props) => {
  const { state } = useContext(X); // 读取state​
  return (
    <div>
      儿子组件
      <div>m:{state.m}</div>
    </div>
  );
})