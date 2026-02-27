import { useRef, useEffect, useState, Component, type ReactNode } from "react";
import { flushSync } from "react-dom";

export default function TestSetState() {


  return (
    <div>TestSetState<TestComp /></div>
  );
}

class TestComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount(): void {
    debugger
  }
  render() {
    return <div onClick={() => {
      // setTimeout(() => {
      //   flushSync(() => {
      //     console.log(this.state.counter)
      //     this.setState({ counter: 1 })
      //     console.log(this.state.counter)
      //   })
      // })
      flushSync(() => {
        console.log(this.state.counter)
        this.setState({ counter: 1 })
        console.log(this.state.counter)
      })
    }}>TestComp</div>
  }
}

