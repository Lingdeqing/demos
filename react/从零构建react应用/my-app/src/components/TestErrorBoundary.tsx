import { useState, Component, ReactNode, type ErrorInfo, useEffect } from "react"

export default function TestErrorBoundary() {

  return (
    <ErrorBoundary>
      <div>
        <Child />
        <Child2 />
      </div>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI​
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器​
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染​
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
class Child extends Component {
  componentWillUnmount(): void {
    console.log('child componentWillUnmount')
  }
  componentDidMount(): void {
    // throw new Error
  }
  render(): ReactNode {
    return <div>child</div>
  }
}

function Child2() {
  useEffect(() => {
    // throw new Error
  }, [])
  return <div onClick={() => {
    throw new Error
  }}>Child2</div>
}