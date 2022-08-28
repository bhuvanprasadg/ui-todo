const SERVER_IP='13.71.62.74';
async function getTodos() {
  const requestOptions = {
    method: "GET",
    headers:{'Access-Control-Request-Private-Network': 'true'}
  };
  const response = await fetch(
    `http://${SERVER_IP}/todos`,
    requestOptions,{mode:'cors'}
  );
  return await response.json();
}

async function addTodo(name) {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type':'application/json','Access-Control-Request-Private-Network': 'true'},
    body: JSON.stringify({name})
  };
  const response = await fetch(
    `http://${SERVER_IP}/addtodo`,
    requestOptions,{mode:'cors'}
  )
  return await response.json();
}

async function deleteTodo(id) {
  const requestOptions = {
    method: "DELETE",
    headers: {'Access-Control-Request-Private-Network': 'true'},
  };
  const response = await fetch(
    `http://${SERVER_IP}/delete?id=${id}`,
    requestOptions,{mode:'cors'}
  )
  return await response.json();
}

export { getTodos, addTodo, deleteTodo }
