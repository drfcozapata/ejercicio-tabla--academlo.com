let table = document.querySelector("#users-table tbody");

const users = [{
        name: "Erik",
        age: 29,
        email: "erik@academlo.com",
        gender: "Male",
        social: [
            { name: "facebook", url: "facebook/erik" },
            { name: "twitter", url: "twitter/erik" }
        ]
    },
    {
        name: "Georg",
        age: 33,
        email: "georg@academlo.com",
        gender: "Male",
        social: [
            { name: "facebook", url: "facebook/georg" },
            { name: "twitter", url: "twitter/georg" }
        ]
    },
    {
        name: "Andrea",
        age: 42,
        email: "andrea@hotmail.com",
        gender: "Female",
        social: [
            { name: "facebook", url: "facebook/andrea" },
            { name: "twitter", url: "twitter/andrea" }
        ]
    },
    {
        name: "Oscar",
        age: 31,
        email: "oscar@academlo.com",
        gender: "Male",
        social: [
            { name: "facebook", url: "facebook/oscar" },
            { name: "twitter", url: "twiter/oscar" }
        ]
    },
    {
        name: "Daniela",
        age: 22,
        email: "andrea@uaq.mx",
        gender: "Female",
        social: [
            { name: "facebook", url: "facebook/andrea" },
            { name: "twitter", url: "twitter/andrea" }
        ]
    }
];


// Con el archivo table.js y el arreglo users, crear una tabla cuyos datos solo sean los que tienen @academlo.com en sy correo electrónico
// PUNTOS A TENER EN CUENTA:
// -Crear elementos de JS con createElement y appendChild
// -La tabal final debe estar estilizada.


for (let i = 0; i < users.length; i++) {
    if (users[i].email.endsWith('@academlo.com')) {

        let tableContainerRow = document.createElement('TR'),
            cellContainerName = document.createElement('TD'),
            cellContainerEmail = document.createElement('TD'),
            cellContainerAge = document.createElement('TD'),
            cellContainerGender = document.createElement('TD');

        cellContainerName.innerText = users[i].name;
        cellContainerEmail.innerText = users[i].email;
        cellContainerAge.innerText = users[i].age;
        cellContainerGender.innerText = users[i].gender;

        tableContainerRow.appendChild(cellContainerName);
        tableContainerRow.appendChild(cellContainerEmail);
        tableContainerRow.appendChild(cellContainerAge);
        tableContainerRow.appendChild(cellContainerGender);

        table.appendChild(tableContainerRow)

        for (let j = 0; j < users[i].social.length; j++) {
            let cellContainerSocial = document.createElement('TD'),
                cellContainerSocialUl = document.createElement('UL'),
                cellContainerSocialLi = document.createElement('LI');

            cellContainerSocialLi.innerText = users[i].social[j].url;

            cellContainerSocialUl.appendChild(cellContainerSocialLi);
            cellContainerSocial.appendChild(cellContainerSocialUl);
            tableContainerRow.appendChild(cellContainerSocial);

        }
    }
}