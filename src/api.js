async function getTodos() {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetch(
    `/todos`,
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
    `/addtodo`,
    requestOptions
  )
  return await response.json();
}

async function deleteTodo(id) {
  const requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(
    `/delete?id=${id}`,
    requestOptions
  )
  return await response.json();
}

export { getTodos, addTodo, deleteTodo }