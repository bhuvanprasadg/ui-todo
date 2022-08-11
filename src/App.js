import './App.css';
import {useEffect, useState} from "react";
import {getTodos} from "./api";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  const [todo, setTodo] = useState([]);
  useEffect(()=> {
    async function fetchGoals() {
      const responses = getTodos();
      responses.then((response) => setTodo(response.data));
    }
    fetchGoals();
  },[]);
  return (
    <div className="App" class="d-flex justify-content-center">
      <h3>Todo App</h3>
      <table class="table table-striped w-50 position-absolute mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo</th>
          </tr>
        </thead>
        {todo.length > 0 ? <tbody>
          {todo.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody> : <></>}
      </table>
    </div>
  );
}

export default App;
