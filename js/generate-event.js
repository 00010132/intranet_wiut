var events = document.querySelector("section.events");

// $event-purple-in: #874bf2; // purple in
// $event-purple-body: #ab7cf2; // purple body
//
// $event-pink-body: #f59ea7; // pink body
// $event-pink-body: #f14b75; // pink in
//
// $event-lightblue-body: #88c0ee; // lightblue body
// $event-lightblue-in:  #4b51f1; // lightblue in
//
// $event-blue-body: #3e7bfd; // blue body
// $event-blue-in: #043ffb; // blue in

let colorsBody = [
    "#ab7cf2", // purple
    "#f59ea7", // pink
];
let colorsIn = [
    "#874bf2", // purple
    "#f14b75", // pink
];

let data = [
    {
        day: "20",
        month: "NOV",
        title: "Westminster International University in Tashkent (WIUT) held the official opening ceremony of its b",
        description: "Westminster International University in Tashkent (WIUT) held the official opening ceremony of its brand-new innovative campus.",
    },
    {
        day: "22",
        month: "SEP",
        title: "Induction Week 2020-2021",
        description: "Induction Week 2020-2021 For an Academic staff"
    },
    {
        day: "2",
        month: "JUL",
        title: "UOW International Linguistics Conference in London",
        description: "UOW International Linguistics Conference in London"
    },
    {
        day: "25",
        month: "JUN",
        title: "UWED CESS Regional Conference in Tashkent",
        description: "UWED CESS Regional Conference in Tashkent"
    },
    {
        day: "19",
        month: "JUN",
        title: "Development Symposium in London (organized jointly WIUT - UOW)",
        description: "Development Symposium in London (organized jointly WIUT - UOW)"
    },
    {
        day: "8",
        month: "JUN",
        title: "Partnership Board meeting + WIUT students may visit UOW for a week",
        description: "Partnership Board meeting + WIUT students may visit UOW for a week"
    },
    {
        day: "1",
        month: "JUN",
        title: "IFPRI/WIUT Summer School (perhaps another Summer School if I get DAAD funding",
        description: "IFPRI/WIUT Summer School (perhaps another Summer School if I get DAAD funding + a couple of summer schools suggested by Lobar"
    },
];

// fetching the data and generate elements dynamically
for (let i = 0; i < data.length; i++) {
    let row = data[i];

    let which = i;

    if ( i+1 >= 2 )
        which = (i) % 2;

    let dateColor = colorsIn[which];
    let textColor = colorsBody[which];

    console.log(dateColor + ' ' + textColor);

    let event = document.createElement("div");
    event.className = "block event";
    event.style.backgroundColor = textColor;
    events.appendChild(event);

    let date = document.createElement("div");
    date.className = "date";
    date.style.backgroundColor = dateColor;
    event.appendChild(date);
    let day = document.createElement("h1");
    day.innerHTML = row.day;
    date.appendChild(day);
    let month = document.createElement("h4");
    month.innerHTML = row.month;
    date.appendChild(month);

    let text = document.createElement("div");
    text.className = "text";
    event.appendChild(text);
    let title = document.createElement("h3");
    title.innerHTML = row.title;
    text.appendChild(title);
    let description = document.createElement("p");
    description.innerHTML = row.description;
    text.appendChild(description);
}
