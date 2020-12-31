import { useState, useEffect, useReducer } from 'react';
function Counter({ step }) {
  const [count, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type === 'tick') {
      return state + step;
    } else {
      throw new Error();
    }
  }
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}
function UseReducer() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <Counter step={step}/>
        <input value={step} onChange={e => setStep(Number(e.target.value))} />
      </header>
    </div>
  );
}
export default UseReducer;