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
const reasons = [

"I love the day I met you at Joy Sir's tuition because it changed my life forever. ❤️",

"I love your beautiful smile because it can brighten even my worst day. 😊",

"I love the way you care about the people you love. 🌸",

"I love how patient you've been with me throughout our journey. ❤️",

"I love that I can talk to you about almost anything. 💕",

"I love the comfort I feel whenever I'm with you. 🥰",

"I love that our story started on 08 January 2020 and has given me so many beautiful memories. ❤️",

"I love our Ahmedabad memories because they will always have a special place in my heart. 🌆",

"I love the evening we spent sitting together at Riverfront and enjoying those peaceful moments. 🌅",

"I love our ice cream dates because the simplest moments with you always become special. 🍦",

"I love celebrating your birthday together in Ahmedabad because it remains one of my favourite memories. 🎂",

"I love our lunch at Patang and the beautiful moments we shared there. ❤️",

"I love the time we spent together in the hotel, talking, laughing and creating memories that I'll never forget. ✨",

"I love how even ordinary days become memorable when I'm with you. 🌷",

"I love your laugh because it instantly makes me smile too. 😊",

"I love the way you understand me even when I struggle to explain myself. 🤍",

"I love all the random conversations we've had over the years. 📱",

"I love that some of my happiest memories in life have you in them. ❤️",

"I love the trust we've built together over time. 🤝",

"I love how a simple message from you can completely change my mood. 💌",

"I love the person you've become and the person you continue to grow into every day. 🌹",

"I love the happiness you bring into my life simply by being yourself. 💖",

"And most importantly, I love you because life became more beautiful, more meaningful, and much happier after you became a part of it. ❤️"

];

let currentReason = 0;

function updateReason(){

document.getElementById("reasonNumber").innerHTML =
`Reason ${currentReason + 1} of 23 ❤️`;

document.getElementById("reasonText").innerHTML =
reasons[currentReason];

}

function nextReason(){

if(currentReason < reasons.length - 1){
currentReason++;
updateReason();
}

}

function prevReason(){

if(currentReason > 0){
currentReason--;
updateReason();
}

}

updateReason();
