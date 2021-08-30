import Header from './components/Layout/Header'
import Meal from './components/Meals/Meal'
import Cart from './components/Cart/Cart'
import {useState} from 'react'

function App() {
  const [modal,setModal]=useState(false)
  const modalHandler=()=>{
    setModal(prevst=>{
      return !prevst
    })
  }
  
  return (
    <div style={{height:'190vh'}}>
     {modal && <Cart modalHandler={modalHandler}/>}
      <Header modalHandler={modalHandler}/>
      <main style = {{position:'relative',top:'-10rem'}}>
      <Meal/>
      </main>
    </div>
  );
}

export default App;
