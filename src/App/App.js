// useSelector is a hook provided by the react redux library
// import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ElementForm from '../ElementForm/ElementForm';
import ElementList from '../ElementList/ElementList';
import './App.css';

function App() {
  // useSelector accepts a function that tells it what part of the store you want
  // here we return the store
  // const reduxStore = useSelector(store => store)
  const count = useSelector(store => store.count)
  // const elementList = useSelector(store => store.elementList)

  // const [newElement, setNewElement] = useState('')

  // dispatch is how we talk to redux from react
  const dispatch = useDispatch(); // leave this here but also bring to component folders

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   dispatch({
  //     type: 'ADD_ELEMENT',
  //     payload: newElement
  //   })
  //   setNewElement('')
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* render the entire redux store as a javascript object */}
        {/* <pre>{JSON.stringify(reduxStore)}</pre> */}
      </header>

      <p>Count is {count}</p>

      {/* dispatching an action when a button is clicked*/}
      <button disabled = {count > 8999} onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button disabled = {count < 1} onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>

      {/* <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Element name'
        value={newElement}
        onChange={event => setNewElement(event.target.value)}
        />
        <button type="submit">Add</button>
      </form> */}
      <ElementForm />
      <ElementList />
      {/* <button onClick={() => dispatch({ type:'ADD_ELEMENT', payload: newElement })}>Add Element</button>
      <ul>
        {elementList.map((element, i) => <li key={i}>{element}</li>)}
      </ul> */}

    </div>
  );
}

export default App;
