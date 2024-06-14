let score = 0;
function scoreTest() {
    const kol = document.getElementById("left");
    const kop = document.getElementById("kop");
    const koi = document.getElementById("rty");
    score += 1;
    kop.setAttribute("disabled", true);
    koi.setAttribute("disabled", true);
    koi.style.backgroundColor = "red"
    kop.style.backgroundColor = "lightgreen"
     kol.innerHTML = score;
}
function redDid() {
    const ho = document.getElementById("rty");
    const kou = document.getElementById("kop");
    const go = document.getElementById("left");
    score = -1;
    ho.style.backgroundColor = "red";
    ho.setAttribute("disabled", true);
    kou.setAttribute("disabled", true);
    kou.style.backgroundColor = "lightgreen";
    go.innerHTML = score;
}
function greenDid() {
    score += 1;
    const lol = document.getElementById("hok");
    const gog = document.getElementById("left");
    lol.style.backgroundColor = "lightgreen";
    gog.innerHTML = score;
}