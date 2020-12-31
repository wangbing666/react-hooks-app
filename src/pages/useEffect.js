import { useEffect, useState } from 'react';
function UseEffect() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = 'useEffect的使用';
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fls-afch-stg.pingan.com.cn/af-zk-app/system-server/phoneApi/sms/version/update/1.45/android`);
      const json = await response.json();
      setData(json);
    }
    fetchData()
  }, []);
  // useEffect(() => {
  //   setCount(count + 1)
  // }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>
          count++
        </button>
        <div>useEffect的使用</div>
        <div>{JSON.stringify(data)}</div>
      </header>
    </div>
  );
}
export default UseEffect;