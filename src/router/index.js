import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import ListePageSize from '../pages/listePageSize';
import InputValue from '../pages/inputValue';
import Request from '../pages/request';

function RouterConfig() {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/listePageSize" component={ListePageSize} />
      <Route path="/inputValue" component={InputValue} />
      <Route path="/request" component={Request} />
    </Router>
  )
}

export default RouterConfig;