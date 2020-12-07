/* Navigation menu button toggler */
function navResponsify() {
    var x = document.getElementById("navBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

/* Opens Report in a separate chrome tab */
function downloadReport() {
    let url = "Example_sub_page.pdf";
    window.open(url, "_blank");
}