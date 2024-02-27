// NOTE = provider -> this provider component makes the redux store available to any nested component that need to access the store


import './App.css'
import Todo from './components/todo'

//importing provider and the store 
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <>
      <Provider store={store}>
      {/* now this Todo component has the ascess to our store by using a hook called useSelector() */}
      <Todo/>
      </Provider>
    </>
  )
}

export default App
