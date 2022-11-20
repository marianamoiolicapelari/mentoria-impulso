const formAddUser = document.getElementById("form-cad-user");
const btnAddUser = document.getElementById("btn-form-cad-user");
const tableAddUser = document.getElementById("table-add-user");

const url = "http://localhost:3000/";

const responseToJson = (response) => response.json();

const onSuccess = (response) => {
  console.log(response)
  createTablePosts(response);
  console.log('atualizei')
};

const listUsers = () => {
  fetch(url).then(responseToJson).then(onSuccess);
  console.log('listando dados')
}

listUsers()

const clearTable = () => {
  const tbody = document.createElement("tbody");
  tableAddUser.querySelector("tbody").remove();
  tableAddUser.appendChild(tbody);
};

const createTablePosts = (users) => {
  clearTable();
  users.forEach((user) => {
    const tr = document.createElement("tr");
    let td = document.createElement("td");

    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn-delete");
    btnDelete.setAttribute("onclick", `deleteUser('${user.id}')`);
    btnDelete.innerText = "Deletar";

    // let btnUpdate = document.createElement('button')
    // btnDelete.setAttribute('class', 'btn-update')
    // btnDelete.setAttribute('onclick', `updateUser('${user.id}')`)
    // btnDelete.innerText = 'Atualizar'

    td.innerText = user.firstname;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = user.lastname;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = user.email;
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(btnDelete);
    tr.appendChild(td);

    // td = document.createElement('td')
    // td.appendChild(btnUpdate)
    // tr.appendChild(td)

    tableAddUser.querySelector("tbody").appendChild(tr);
  });
};


const addUser = () => {
  const formData = new FormData(formAddUser);
  const newUser = Object.fromEntries(formData);

  fetch("http://localhost:3000/", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(() => {})
    .then(() =>  {
      console.log('criei')
      listUsers()
    });
};

btnAddUser.addEventListener("click", addUser);

const deleteUser = (id) => {
  fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then((res) => {
    console.log('deletei')
    listUsers()
  })

};
