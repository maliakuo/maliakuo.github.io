let counter = 0;

function revealDiv() {
    if (counter == 16) {
        document.getElementById("snip").style.display = "none";
        document.getElementById("haircut_fin").style.display = "block";
    }

    document.getElementById(counter).style.display = "block";
    counter++;
}