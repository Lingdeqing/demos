import { useRef, useEffect } from "react";

export default function TestEvent() {
  const divDom = useRef<HTMLDivElement>(null);
  const h1Dom = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
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
    divDom.current?.addEventListener('click', click1)
    h1Dom.current?.addEventListener('click', click2)


    const click11 = () => {
      console.log('div.onClickCapture.native')
    }
    const click22 = () => {
      console.log('h1.onClickCapture.native')
    }
    const click33 = () => {
      console.log('document.onClickCapture.native')
    }
    document?.addEventListener('click', click33, true)
    divDom.current?.addEventListener('click', click11, true)
    h1Dom.current?.addEventListener('click', click22, true)
    return () => {
      divDom.current?.removeEventListener('click', click1)
      h1Dom.current?.removeEventListener('click', click2)
      document?.removeEventListener('click', click3)
      divDom.current?.removeEventListener('click', click11, true)
      h1Dom.current?.removeEventListener('click', click22, true)
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


