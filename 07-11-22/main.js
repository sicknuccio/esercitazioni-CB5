fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.map((x) =>
      console.log(
        "Name:",
        x.name,
        "\n",
        "Street:",
        x.address.street,
        "\n",
        "City:",
        x.address.city
      )
    )
  )
  .catch((e) => console.log("error:" + e));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) =>
    todos.map((x) =>
      console.log("User Id:", x.userId, "ID:", x.id, "Title:", x.title)
    )
  )
  .catch((e) => console.log("error:" + e));
