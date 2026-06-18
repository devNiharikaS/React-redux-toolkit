import './App.css'
import Header from "./redux/header"
import Product from './product'
import { useDispatch } from 'react-redux'
import { clearallitem } from './redux/slice';

function App() {
  const dispatch=useDispatch();

  return (
    <>
    <Header/>
     
      <button onClick={()=>dispatch(clearallitem)} className='btn'> clear cart </button>
      <Product/>
    </>
  )
}

export default App
