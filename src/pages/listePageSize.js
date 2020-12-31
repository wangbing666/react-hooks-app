import { useEffect } from 'react';
import { useWindowSize } from '../hooks/userWindowSize';

function ListePageSize() {
  const windowSize = useWindowSize();

  useEffect(() => {
    document.title = '监听页面大小变化';
  }, [])

  return (
    <div>
      <header>监听页面大小变化</header>
      <div>页面高度：{windowSize.innerHeight}</div>
      <div>页面宽度：{windowSize.innerWidth}</div>
      <div>窗口高度：{windowSize.outerHeight}</div>
      <div>窗口宽度：{windowSize.outerWidth}</div>
    </div>
  );
}

export default ListePageSize;
