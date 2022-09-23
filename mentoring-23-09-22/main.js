import "./style.css";
const questionEL = document.querySelector(".question");
questionEL.innerText = "How do I select the HTML in DOM?";

const myBTN = document.querySelector(".btn");
myBTN.addEventListener("click", () => {
  const answer = document.querySelector(".showAnswer");
  answer.classList.toggle("hidden");
});
