import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from '../logo.svg';
import { ThemeContext } from '../theme';


function Home() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'React Hooks的使用';
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="useState">useState的使用</Link>
        <Link className="App-link" to="useEffect">useEffect的使用</Link>
        <Link className="App-link" to="useRef">useRef的使用</Link>
        <Link className="App-link" to="useMemo">useMemo的使用</Link>
        <Link className="App-link" to="useCallback">useCallback的使用</Link>
        <Link className="App-link" to="useReducer">useReducer的使用</Link>
        <Link className="App-link" to="listePageSize">监听窗口大小</Link>
        <Link className="App-link" to="inputValue">获取表单的输入值</Link>
        <Link className="App-link" to="request">进行网络请求</Link>
        <Link className="App-link" to="form">Form表单封装</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ fontWeight: theme.fontWeight, }}>React Hooks的使用</div>
      </header>
    </div>
  );
}

export default Home;
