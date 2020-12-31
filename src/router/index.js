import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import ListePageSize from '../pages/listePageSize';
import InputValue from '../pages/inputValue';
import Request from '../pages/request';
import Form from '../pages/form';
import UseState from '../pages/useState';
import UseRef from '../pages/useRef';
import UseMemo from '../pages/useMemo';
import UseCallback from '../pages/useCallback'
import UseEffect from '../pages/useEffect'
import UseReducer from '../pages/useReducer'

function RouterConfig() {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/listePageSize" component={ListePageSize} />
      <Route path="/inputValue" component={InputValue} />
      <Route path="/request" component={Request} />
      <Route path="/form" component={Form} />
      <Route path="/useRef" component={UseRef} />
      <Route path="/useMemo" component={UseMemo} />
      <Route path="/useCallback" component={UseCallback} />
      <Route path="/useState" component={UseState} />
      <Route path="/useEffect" component={UseEffect} />
      <Route path="/useReducer" component={UseReducer} />
    </Router>
  )
}

export default RouterConfig;