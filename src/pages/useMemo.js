import { useState, useMemo } from 'react';
function UseMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  const expensive = useMemo(() => {
    console.log('我被执行了');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count])
  return (
    <div>
      <div>{count}</div>
      <div>{val}</div>
      <h4>{expensive}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={event => setValue(event.target.value)} />
      </div>
    </div>
  )
}

export default UseMemo;
