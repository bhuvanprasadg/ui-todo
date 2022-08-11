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

export {getTodos}