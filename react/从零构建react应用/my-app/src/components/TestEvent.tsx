import { useRef, useEffect } from "react";

export default function TestEvent() {
  const divDom = useRef<HTMLDivElement>(null);
  const h1Dom = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const div = divDom.current
    const h1 = h1Dom.current
    const click1 = () => {
      console.log('div.onClick.native')
    }
    const click2 = () => {
      console.log('h1.onClick.native')
    }
    const click3 = () => {
      console.log('document.onClick.native')
    }
    document?.addEventListener('click', click3)
    div?.addEventListener('click', click1)
    h1?.addEventListener('click', click2)


    const click11 = (e: MouseEvent) => {
      // e.stopPropagation() // 阻止继续传播
      console.log('div.onClickCapture.native')
    }
    const click22 = () => {
      console.log('h1.onClickCapture.native')
    }
    const click33 = () => {
      console.log('document.onClickCapture.native')
    }
    document?.addEventListener('click', click33, true)
    div?.addEventListener('click', click11, true)
    h1?.addEventListener('click', click22, true)
    return () => {
      div?.removeEventListener('click', click1)
      h1?.removeEventListener('click', click2)
      document?.removeEventListener('click', click3)
      div?.removeEventListener('click', click11, true)
      h1?.removeEventListener('click', click22, true)
      document?.removeEventListener('click', click33, true)
    };
  }, []);

  return (
    <div
      ref={divDom}
      className="App1"
      onClickCapture={(e) => {
        console.log('div.onClickCapture')
      }}
      onClick={() => {
        console.log('div.onClick')
      }}
    >
      <h1
        ref={h1Dom}
        onClickCapture={() => {
          console.log('h1.onClickCapture')
        }}
        onClick={(e) => {
          console.log('h1.onClick')
          console.log('event.target是否复用', e.target)
          setTimeout(() => {
            console.log('event.target是否复用', e.target)
          }, 0)
        }}
      >
        点击我试试
      </h1>
    </div>
  );
}


