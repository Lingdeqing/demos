import { useRef, useEffect, useState, Component, type ReactNode } from "react";
import { flushSync } from "react-dom";

export default function TestSetState() {
  const [a, setA] = useState(true)


  return (
    <div onClick={() => setA(!a)}>TestSetState.  {a && <TestSetState2 />}</div>
  );
}

export function TestSetState2() {
  const [a, setA] = useState(0)
  useEffect(() => {
    return () => {
      console.log('willUnmount')
    }
  }, []);

  return (
    <div onClick={() => setA(a + 1)}>TestSetState2<TestComp /></div>
  );
}


class TestComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      shit: 22
    }
  }
  componentDidMount(): void {
    this.setState({ counter: 1 })
    console.log(this.state.counter)
    setTimeout(() => {
      this.setState({ counter: 2 })
      console.log(this.state.counter)
      this.setState({ counter: 3 })
      console.log(this.state.counter)
    }, 200)
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
    }}>TestComp shit:{this.state.shit} counter:{this.state.counter}</div>
  }
}

