const questions = document.getElementsByClassName("question");
const descriptions = document.getElementsByTagName("p");


for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", () => {
        descriptions[i].classList.toggle("hidden");
        const img = questions[i].querySelector("img");
      if (img.src.endsWith("icon-plus.svg")) {
        img.src = "./assets/images/icon-minus.svg";
        img.alt = "icon-minus"
    } else {
        img.src = "./assets/images/icon-plus.svg";
        img.alt = "icon-plus"
    }
    })
};