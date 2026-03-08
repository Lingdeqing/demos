import { useDeferredValue, useState } from "react"

export default function TestUseDeferredValue() {
  const [value, setValue] = useState(''); // 创建state读写接口​
  const value2 = useDeferredValue(value)

  let now = Date.now()
  console.log(Date.now(), value)
  while (Date.now() - now < 500) {

  }
  return (
    <div>
      <input type="text" value={value} onChange={e => {
        setValue(e.target.value)
        console.log(e.target.value)
      }} />
      <div>value: {value}</div>
      <div>value2: {value2}</div>
    </div>
  );
}