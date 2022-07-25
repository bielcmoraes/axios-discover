const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .then()
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(url + "/" + id)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userId.textContent = response.data.id
        userAvatar.src = response.data.avatar

    })
    .catch(error => console.error(error))
}

function updateUser(id, info){
    axios.put(url + "/" + id, info)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function removeUser(id) {
    axios.delete(url + "/" + id)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}


//////////////////////////////////////////////////////////////////
const newUser = {
    name: "Gabriel Adicionado",
    avatar: "https://picsum.photos/200/300",
    city: "Cidade Adicionada"
}

const userAtt = {
    name: "Mudei Updated",
    avatar: "https://picsum.photos/200/300",
    city: "Cidade Updated"
}

getUsers()
getUser(1)
//removeUser(4)
//updateUser(3, userAtt)
//addNewUser()
