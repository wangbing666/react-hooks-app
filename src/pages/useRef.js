import { useEffect, useState,useRef, useCallback } from 'react';

function UseRef() {
  const [count, setCount] = useState(0)
  const timer = useRef(null)
  let timer2

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    timer.current = id
    timer2 = id
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  const onClickRef = () => {
    clearInterval(timer.current)
  }

  const onClick = useCallback(() => {
    clearInterval(timer2)
  }, [])
  return (
    <div>
      点击次数: { count}
      <button onClick={onClick}>普通清除</button>
      <button onClick={onClickRef}>useRef清除</button>
    </div>
  )

}

export default UseRef;
