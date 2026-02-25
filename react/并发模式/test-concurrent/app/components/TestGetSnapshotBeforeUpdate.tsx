import React, { useState } from "react"

export default function AboutTab() {
  const [count, setCount] = useState(0)
  return (
    <div className="">
      <TestGetSnapshotBeforeUpdate count={count} />
      <div onClick={() => {
        setCount(count => count + 1)
      }}>更新props</div>
    </div>
  );
}
class TestGetSnapshotBeforeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('111===getSnapshotBeforeUpdate')
    return null;
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {

  }
  onClick = () => {
    this.setState({})
  }
  render() {
    console.log('render TestGetSnapshotBeforeUpdate')
    return (
      <div className="">
        TestGetSnapshotBeforeUpdate
        <button onClick={this.onClick}>Click me</button>
      </div>
    )
  }
}
