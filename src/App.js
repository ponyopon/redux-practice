import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './actions';



function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>hello</h1>
      <h3>a{counter}</h3>
      <button onClick={()=>dispatch(increment())}>
        +
      </button>
      <button onClick={()=>dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default App;
