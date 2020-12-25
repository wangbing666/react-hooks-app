import { useEffect, useState } from 'react';
import { useRequest } from '../common/useRequest';

function getNewsList() {
  return fetch('http://v.juhe.cn/toutiao/index')
}


function Request() {
  const params = {
    type: '',
    key: '974a777a0c0629f173a0b8489b7eacc5',
  }
  fetch('http://v.juhe.cn/toutiao/index')
  // const { data, loading, error } = useRequest(getNewsList, params);
  console.log(123)
  useEffect(() => {
    document.title = '进行网络请求';
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default Request;
