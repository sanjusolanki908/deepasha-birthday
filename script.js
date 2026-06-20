function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "08012020") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-site").style.display = "block";
        window.scrollTo(0, 0);
    } else {
        alert("Wrong Password ❤️");
    }
}

const startDate = new Date("2020-01-08");

function updateCounter() {
    const today = new Date();

    const diff = Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("daysCounter").innerHTML =
        diff + " Days";
}

updateCounter();

function showSurprise() {
    const hidden = document.getElementById("hidden-message");

    if (hidden.style.display === "block") {
        hidden.style.display = "none";
    } else {
        hidden.style.display = "block";
        hidden.scrollIntoView({
            behavior: "smooth"
        });
    }
}
function openLetter(){
const letter = document.getElementById("letterOverlay");
letter.style.display = "block";
}

function closeLetter(){
const letter = document.getElementById("letterOverlay");
letter.style.display = "none";
}
