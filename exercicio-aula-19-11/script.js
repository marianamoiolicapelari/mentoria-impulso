addFormClient = document.getElementById("form-client");
btnAddClient = document.getElementById("btn-form-client");
addTableClient = document.getElementById("table-client");

const listUsers = () => {
  fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((res) => createTable(res));
};

listUsers();

const clearTable = () => {
  const tbody = document.createElement("tbody");
  addTableClient.querySelector("tbody").remove();
  addTableClient.appendChild(tbody);
};

const createTable = (users) => {
  clearTable();
  users.forEach((user) => {
    const tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerText = user.firstname;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = user.lastname;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = user.email;
    tr.appendChild(td);

    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn-delete");
    btnDelete.setAttribute("onclick", `deleteUser('${user.id}')`);
    btnDelete.innerText = "Deletar";

    td = document.createElement("td");
    td.appendChild(btnDelete);
    tr.appendChild(td);

    addTableClient.querySelector("tbody").appendChild(tr);
  });
};

const addUser = () => {
  const formData = new FormData(addFormClient);
  const newUser = Object.fromEntries(formData);

  fetch("http://localhost:3000/", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(() => {})
    .then(() => {
      listUsers();
    });
};

btnAddClient.addEventListener("click", addUser);

const deleteUser = (id) => {
  fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("deletei");
      listUsers();
    });
};
