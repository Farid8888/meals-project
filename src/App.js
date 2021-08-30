import Header from './components/Layout/Header'
import Meal from './components/Meals/Meal'

import {useState} from 'react'
import {createStore} from 'redux'
import {reducerState} from './components/reducer/reducer'
import {Provider} from 'react-redux'

function App() {
  
  const store =createStore(reducerState)

 
  
  return (
    <Provider store={store}>
    <div style={{height:'190vh'}}>
      <Header />
      <main style = {{position:'relative',top:'-10rem'}}>
      <Meal/>
      </main>
    </div>
    </Provider>
  );
}

export default App;
