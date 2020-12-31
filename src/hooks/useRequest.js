import { useEffect, useState } from 'react';

export function useRequest(promise, params = {}) {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState({});
  let [error, setError] = useState('');

  const reSync = () => {
    setError('');
    setLoading(true);
    promise(params)
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.msg || `服务器异常，请稍后重试，code：${err.code}`);
        // 这里可以放一个toast提示
        console.error('请求失败', err);
      });
  }
  useEffect(() => {
    reSync()
  }, []);

  return { data, loading, error };
}
