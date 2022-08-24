import {useEffect, useState} from "react";
import {getTodos, addTodo, deleteTodo} from "./api";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  async function fetchGoals() {
    const responses = getTodos();
    responses.then((response) => setTodo(response.data));
  }

  useEffect(()=> {
    fetchGoals();
  },[]);
  return (
    <div className="app">
      <h3 className='title'>TODO APP</h3>
      <table className='table table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th>ID</th>
            <th>TODO</th>
          </tr>
        </thead>
        {todo.length > 0 ? <tbody>
          {todo.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="description">{item.name}</td>
              <td><button type="button" className="btn btn-danger" onClick={()=>{
                deleteTodo(item.id);
                fetchGoals()
                NotificationManager.warning('todo deleted');
              }}>Delete</button></td>
            </tr>
          ))}
        </tbody> : <></>}
      </table>
      <div className="input-fields">
        <input type='text' className="input-box" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <Button color="primary" className='add-todo' onClick={()=>{
        if (input.length>0) {
          addTodo(input);
          fetchGoals()
          setInput('')  
          NotificationManager.success('todo added');
        }else{
          NotificationManager.error('Empty todo');
        }
        
      }}>Add Todo</Button>
      </div>
      <NotificationContainer/>
    </div>
  );
}

export default App;
