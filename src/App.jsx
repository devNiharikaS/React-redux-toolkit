import './App.css'
import Header from "./redux/header"
import Product from './product'
import { useDispatch } from 'react-redux'
import { clearallitem } from './redux/slice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cartlist from './Cartlist';

function App() {
  const dispatch=useDispatch();

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
<Route path="/" element={ <Product/>} > </Route>
<Route path="/cart" element={<Cartlist/>}></Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
