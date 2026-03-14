import { useDeferredValue, useState, startTransition } from "react"

export default function TestTransition() {
  const [value, setValue] = useState(''); // 创建state读写接口​

  return (
    <div>
      <input type="text" value={value} onChange={e => {
        startTransition(() => {
          setValue(e.target.value)
          console.log(e.target.value)
        })
      }} />
      <div>value: {value}</div>
    </div>
  );
}