var modules = document.querySelector("section.modules");

var data = [
    {
        code: "4BUIS008C",
        title: "Fundamentals of Programming",
        status: "Core",
        duration: "1, 2",
        credits: "20",
        deadline: "December, 22"
    },
    {
        code: "4BUIS009C",
        title: "Introduction to Statistics and Data Science",
        status: "Core",
        duration: "1",
        credits: "20",
        deadline: "December, 17"
    },
    {
        code: "4BUIS010C",
        title: "Introduction to Management and Organisational Behaviour",
        status: "Core",
        duration: "1",
        credits: "20",
        deadline: "December, 20"
    },

];

console.log(data);

for (let i = 0; i < data.length; i++) {
    let row = data[i];

    let module = document.createElement("div");
    module.className = "block module";
    modules.appendChild(module);

    let code = document.createElement("h3");
    code.className = "code";
    code.innerHTML = row.code;
    module.appendChild(code);

    let title = document.createElement("h3");
    title.className = "title";
    title.innerHTML = row.title;
    module.appendChild(title);

    let status = document.createElement("h3");
    status.className = "status";
    status.innerHTML = "Status: ";
    module.appendChild(status);
    let statusVal = document.createElement("span");
    statusVal.innerHTML = row.status;
    status.appendChild(statusVal);

    let duration = document.createElement("h3");
    duration.className = "duration";
    duration.innerHTML = "Semester: ";
    module.appendChild(duration);
    let durationVal = document.createElement("span");
    durationVal.innerHTML = row.duration;
    duration.appendChild(durationVal);

    let credits = document.createElement("h3");
    credits.className = "credits";
    credits.innerHTML = "Credits: ";
    module.appendChild(credits);
    let creditsVal = document.createElement("span");
    creditsVal.innerHTML = row.credits;
    credits.appendChild(creditsVal);

    let deadline = document.createElement("h3");
    deadline.className = "deadline";
    deadline.innerHTML = "CW deadline: ";
    module.appendChild(deadline);
    let deadlineVal = document.createElement("span");
    deadlineVal.innerHTML = row.deadline;
    deadline.appendChild(deadlineVal);
}
// <div class="block module">
//     <h3 class="code">4BUIS008C</h3>
// <h3 class="title">Fundamentals of Programming</h3>
// <h3 class="status">Status: <span>Core</span></h3>
// <h3 class="duration">Semester: <span>1, 2</span></h3>
// <h3 class="credits">Credits: <span>20</span></h3>
// <h3 class="deadline">CW deadline: <span>December, 10</span></h3>
// </div>