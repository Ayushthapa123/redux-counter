
import './App.css';

import { incNumber,decNumber,incNumber5,decNumber5 } from './action';

import {useSelector,useDispatch} from 'react-redux';


function App() {
  const mystate=useSelector((state)=> state.changeTheNumber);
  const dispatch=useDispatch()

  return (
    <div className="app">
     <div className='counter'>
     <span onClick={()=>dispatch(decNumber5())}>-5</span>
      <span onClick={()=>dispatch(decNumber())}>-1</span><span id='value'>{mystate}</span><span onClick={()=>dispatch(incNumber())}>+1</span>
      <span onClick={()=>dispatch(incNumber5())}>+5</span>
     </div>
    </div>
  );
}

export default App;
