import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from './store/slices/user'
import Color from './Color';

// create and use for learning .....................................................................!!!!!!!!!
const App = () => {
  const count = useSelector((state) => {
    return state.users.value
  })
  console.log(count);
  const dispatch = useDispatch()


  return (
    <>
    <div>
    <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
          </button>
      <div >
      {count}
      </div>

    </div>
    </>
  );
};



export default App