const mainBtn = document.getElementById("mainBtn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const emoji = document.getElementById("emoji");
const note = document.getElementById("note");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const noBtn = document.getElementById("noBtn");
const imageArea = document.getElementById("imageArea");

mainBtn.addEventListener("click", () => {
  title.textContent = "Hammasini bilaman 😈";
  description.textContent =
    "Nimalar qilib yurganingni, kechasi kimlar bilan gaplashib chiqishingni ham bilaman! 👀";
  emoji.textContent = "🕵️";
  mainBtn.classList.add("hidden");
  note.classList.add("hidden");
  result.classList.remove("hidden");
  resultText.textContent = "Dadangga telefon qilib, hammasini aytib beraymi? 📞";
});

noBtn.addEventListener("click", () => {
  result.classList.add("hidden");
  imageArea.classList.remove("hidden");
  title.textContent = "Xo'p, xo'p 😂";
  description.textContent = "Mayli, hozircha aytmay turaman...";
  emoji.textContent = "🤐";
});

document.getElementById("secretBtn").addEventListener("click", () => {
  document.getElementById("secretBtn").classList.add("hidden");
  document.querySelector("#imageArea .big-text").textContent = "KECH BO'LDI 😂 FAK!";
  const img = document.getElementById("prankImage");
  img.classList.remove("hidden");
  img.style.animation = "popIn .45s ease-out";
});

document.getElementById("againBtn").addEventListener("click", () => {
  title.textContent = "Men hammasini bilaman!";
  description.textContent = "Menda senga aytadigan gap bor. Eshitishga tayyormisan? 👀";
  emoji.textContent = "😎";
  mainBtn.classList.remove("hidden");
  note.classList.remove("hidden");
  result.classList.add("hidden");
  imageArea.classList.add("hidden");
  document.getElementById("secretBtn").classList.remove("hidden");
});

