fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.forEach((x) =>
      console.log(
        "Name:",
        x.name,
        "\n",
        "Street:",
        x.address.street,
        "\n",
        "Suite:",
        x.address.suite,
        "\n",
        "City:",
        x.address.city,
        "\n",
        "Zipcode:",
        x.address.zipcode,
        "\n",
        "Lat:",
        x.address.geo.lat,
        "Lng:",
        x.address.geo.lng
      )
    )
  )
  .catch((e) => console.log("error:" + e));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) =>
    todos.forEach((x) =>
      console.log("User Id:", x.userId, "ID:", x.id, "Title:", x.title)
    )
  )
  .catch((e) => console.log("error:" + e));
