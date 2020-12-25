
import { Redirect } from 'react-router';

function App() {
  return (
    <Redirect
      to={{
        pathname: "/home",
      }}
    />
  );
}

export default App;