import React, { memo, useCallback, useState } from 'react'

const Children1 = memo(({value1, onChange1 }) => {
  console.log('我是子组件1')
  return (
    <div>
      我是子组件1
      <input type="text" value={value1} onChange={onChange1} />
    </div>
  )
})
const Children2 = memo(({value2, onChange2 }) => {
  // for (let i = 0; i < 100; i++) {
  //   console.log(i)
  // }
  console.log('我是子组件2')
  return (
    <div>
      我是子组件2
      <input type="text" value={value2} onChange={onChange2} />
    </div>
  )
})
function UseCallback() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const handleOnChange1 = (e) => {
    setValue1(e.target.value)
  };
  const handleOnChange2 = useCallback((e) => {
    setValue2(e.target.value)
  }, []);
  return (
    <div>
      <header className="App-header">
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>count++</button>
        <Children1 value1={value1} onChange1={handleOnChange1}></Children1>
        <Children2 value2={value2} onChange2={handleOnChange2}></Children2>
      </header>
    </div>
  )
}
export default UseCallback