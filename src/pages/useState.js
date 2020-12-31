import react, { useState, useEffect } from 'react';

function UseState() {
  const [count, setCount] = useState(0);
  const countAdd = () => {
    setCount(count + 1);
    // console.log(count);
    // setTimeout(() => {
    //   console.log(count);
    // }, 0);
  }

  // useEffect(() => {
  //   console.log(count)
  // }, [count])

  useEffect(() => {
    let time = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(time);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        <button onClick={countAdd}>count++</button>
      </header>
    </div>
  );
}


// class UseState extends react.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     }
//   }
//   countAdd = () => {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1
//     })
//     setTimeout(() => {
//       console.log(this.state.count)
//     }, 0);
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>{count}</div>
//           <button onClick={this.countAdd}>count++</button>
//         </header>
//       </div>
//     )
//   }
// };

export default UseState;