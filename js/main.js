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
    let url = "00010132 - Report.pdf";
    window.open(url, "_blank");
}