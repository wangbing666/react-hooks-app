import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../logo.svg';

function Home() {

  useEffect(() => {
    document.title = 'React Hooks的使用';
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="listePageSize">监听窗口大小</Link>
        <Link className="App-link" to="inputValue">获取表单的输入值</Link>
        <Link className="App-link" to="request">进行网络请求</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <div>React Hooks的使用</div>
      </header>
    </div>
  );
}

export default Home;
