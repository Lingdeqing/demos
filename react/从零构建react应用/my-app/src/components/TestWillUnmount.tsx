import { useState, Component, ReactNode } from "react"

export default function TestWillUnmount() {
  const [value, setValue] = useState(''); // 创建state读写接口​

  return (
    <div>
      <input type="text" value={value} onChange={e => {
        setValue(e.target.value)
      }} />
      <div>{!!value && <Parent />}</div>
    </div>
  );
}

class Parent extends Component {
  componentWillUnmount(): void {
    console.log('parent componentWillUnmount')
  }
  render(): ReactNode {
    return <div><Child /></div>
  }
}
class Child extends Component {
  componentWillUnmount(): void {
    console.log('child componentWillUnmount')
  }
  render(): ReactNode {
    return <div></div>
  }
}