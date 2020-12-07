var table = document.querySelector("table.group tbody");

let data = [
        {
            surname: "Abdurakhmanova",
            name: "Lyutfie",
            group: "3CIFS24"
        },
        {
            surname: "Abdurakhmonov",
            name: "Shakhzod",
            group: "3CIFS24"
        },
        {
            surname: "Akhtamov",
            name: "Komiljon",
            group: "3CIFS24"
        },
        {
            surname: "Alaviddinov",
            name: "Fakhriddin",
            group: "3CIFS24"
        },
        {
            surname: "Ametov",
            name: "Temurbek",
            group: "3CIFS24"
        },
        {
            surname: "Bakhtiyorova",
            name: "Dinora",
            group: "3CIFS24"
        },
        {
            surname: "Bobokhonova",
            name: "Kamilakhon",
            group: "3CIFS24"
        },
        {
            surname: "Doniyorov",
            name: "Samariddin",
            group: "3CIFS24"
        },
        {
            surname: "Gadabaeva",
            name: "Irona",
            group: "3CIFS24"
        },
        {
            surname: "Islomov",
            name: "Mukhammadamin",
            group: "3CIFS24"
        },
        {
            surname: "Jakhongirov",
            name: "Zakariyo",
            group: "3CIFS24"
        },
        {
            surname: "Jozilov",
            name: "Nursulton",
            group: "3CIFS24"
        },
        {
            surname: "Khamraev",
            name: "Timur",
            group: "3CIFS24"
        },
        {
            surname: "Kurbonova",
            name: "Rabiya",
            group: "3CIFS24"
        },
        {
            surname: "Mahmutaliev",
            name: "Islomjon",
            group: "3CIFS24"
        },
        {
            surname: "Makhmudov",
            name: "Amirjon",
            group: "3CIFS24"
        },
        {
            surname: "Marufov",
            name: "Miraziz",
            group: "3CIFS24"
        },
        {
            surname: "Mirkhosilov",
            name: "Mirfozil",
            group: "3CIFS24"
        },
        {
            surname: "Mirzaev",
            name: "Abdulaziz",
            group: "3CIFS24"
        },
        {
            surname: "Olimjonov",
            name: "Bekzod",
            group: "3CIFS24"
        },
        {
            surname: "Rakhimjonov",
            name: "Anvarkhon",
            group: "3CIFS24"
        },
        {
            surname: "Rakhimova",
            name: "Saida",
            group: "3CIFS24"
        },
        {
            surname: "Rakhmatullaev",
            name: "Bositkhon",
            group: "3CIFS24"
        },
        {
            surname: "Sheraliev",
            name: "Akbar",
            group: "3CIFS24"
        },
        {
            surname: "Tavakkalov",
            name: "Bektemir",
            group: "3CIFS24"
        },
        {
            surname: "Turakhadjaev",
            name: "Akramjon",
            group: "3CIFS24"
        },
        {
            surname: "Ulugova",
            name: "Maftunabonu",
            group: "3CIFS24"
        },
        {
            surname: "Urinbekova",
            name: "Dildorakhon",
            group: "3CIFS24"
        }
];

for (let i = 0; i < data.length; i++) {
    let student = data[i];
    let row = document.createElement("tr");
    table.appendChild(row);
    let name = document.createElement("td");
    name.innerHTML = student.name;
    row.appendChild(name);
    let surname = document.createElement("td");
    surname.innerHTML = student.surname;
    row.appendChild(surname);
    let group = document.createElement("td");
    group.innerHTML = student.group;
    row.appendChild(group);
}