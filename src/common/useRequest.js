import { useEffect, useState } from 'react';

export function useRequest(promise, params = {}) {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState({});
  let [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setLoading(true);

    promise(params)
      .then(({ payload }) => {
        setLoading(false);
        setData(payload);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.msg || `服务器异常，请稍后重试，code：${err.code}`);
        // 这里可以放一个toast提示
        console.error('请求失败', err);
      });
  }, [params]);

  return { data, loading, error };
}
