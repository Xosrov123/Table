const log = console.log,
    inputName = document.getElementById('fname'),
    inputSurname = document.getElementById('fsurname'),
    addBtn = document.getElementById('fbtn'),
    mytable = document.querySelector('#mytable'),
    deleteAllBtn = document.getElementById('deleteallbtn'),
    inputSearch = document.getElementById('searchinput'),
    selectSearch  = document.getElementById('searchselect'),
    hamisinisil = document.getElementById('fbtn2');

let users = [
];
loadUsers();

addBtn.addEventListener('click', function () {
    addUser();
})

function searchUsers(par,par2){
    mytable.innerHTML = "";
    for (let i = 0; i < users.length; ++i) {
        if(par2 == "ad"){
            if(users[i].name.toLowerCase().includes(par.toLowerCase())){
                mytable.innerHTML +=
                `
                <tr class ="align-middle xizey">
                    <td>${i + 1}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].surname}</td>
                    <td>
                    <button type="button" data-index = ${i} class="btn btn-sm btn-danger btn-delete-one">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                    </td>
                </tr>
            `
            }
        }else{
            if(users[i].surname.toLowerCase().includes(par.toLowerCase())){
                mytable.innerHTML +=
                `
                <tr class ="align-middle xizey">
                    <td>${i + 1}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].surname}</td>
                    <td>
                    <button type="button" data-index = ${i} class="btn btn-sm btn-danger btn-delete-one">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                    </td>
                </tr>
            `
            }
        }
    }
}

function loadUsers() {
    mytable.innerHTML = "";
    for (let i = 0; i < users.length; ++i){
        mytable.innerHTML +=
            `
            <tr class ="align-middle">
                <td>${i + 1}</td>
                <td>${users[i].name}</td>
                <td>${users[i].surname}</td>
                <td>
                <button type="button" data-index = ${i} class="btn btn-sm btn-danger btn-delete-one">
                    <i class="bi bi-trash-fill"></i>
                </button>
                </td>
            </tr>
        `
    }
}
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-delete-one')) {
        let index = e.target.dataset.index;
        let newUsers = [];
        for (let i = 0; i < users.length; ++i) {
            if (i != index) {
                newUsers.push(users[i]);
            }
        }
        users = newUsers;
        loadUsers();
    }

})




deleteAllBtn.addEventListener('click', function () {
    mytable.innerHTML = "";
    users = [];
})


document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        addUser();
    }
})




function addUser() {
    let yoxladi = true;
    for (let i in users) {
        if (inputName.value === users[i].name && inputSurname.value === users[i].surname) {
            alert("Belə bir istifadəçi var");
            yoxladi = false;
        }
    }

    if (yoxladi && inputName.value !== "" && inputSurname.value !== "") {
        let user = {
            name: inputName.value,
            surname: inputSurname.value
        }
        users.push(user);
        loadUsers();
        inputName.value = "";
        inputSurname.value = "";
    }
}



hamisinisil.addEventListener('click', function () {
    mytable.innerHTML = "";
    users = [];
})




inputSearch.addEventListener('input', function (e) {
    let axtarilacaqSoz = inputSearch.value;
    let axtarilacaqAcar = selectSearch.value;
    searchUsers(axtarilacaqSoz,axtarilacaqAcar);
    
})