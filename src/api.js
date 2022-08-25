async function getTodos() {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `http://localhost:3000/todos`,
    requestOptions
  );
  return await response.json();
}

async function addTodo(name) {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({name})
  };
  const response = await fetch(
    `http://localhost:3000/addtodo`,
    requestOptions
  )
  return await response.json();
}

async function deleteTodo(id) {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(
    `http://localhost:3000/delete?id=${id}`,
    requestOptions
  )
  return await response.json();
}

export { getTodos, addTodo, deleteTodo }