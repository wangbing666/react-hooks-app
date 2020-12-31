import { useEffect } from 'react';
import { useRequest } from '../hooks/useRequest';

function getNewsList() {
  return fetch('https://fls-afch-stg.pingan.com.cn/af-zk-app/system-server/phoneApi/sms/version/update/1.48/android/')
}


function Request() {
  const { data, loading, error } = useRequest(getNewsList, {});
  
  useEffect(() => {
    document.title = '进行网络请求';
  }, []);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {JSON.stringify(data)}</div>;
}

export default Request;
