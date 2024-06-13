let score = 0;
function scoreTest() {
    const kol = document.getElementById("left");
    const kop = document.getElementById("kop");
    score = 1;
    kop.style.backgroundColor = "lightgreen"
     kol.innerHTML = score;
}
function redDid() {
    const kou = document.getElementById("left");
    const ho = document.getElementById("rty");
    score = 0;
    ho.style.backgroundColor = "red";
    kou.innerHTML = score;
}