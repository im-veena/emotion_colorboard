const palette = document.getElementById("palette");
const emotionText = document.getElementById("emotionText");
const buttons = document.querySelectorAll(".emotions button");
const copyMsg = document.getElementById("copyMsg");
const emotions = {
  happy: {
    colors: ["#FFD93D", "#FFB703", "#FFF3B0"],
    text: "Bright, warm, and full of energy."
  },
  sad: {
    colors: ["#6C757D", "#ADB5BD", "#DEE2E6"],
    text: "Soft and muted, reflecting heaviness."
  },
  calm: {
    colors: ["#A8DADC", "#BEE9E8", "#E0FBFC"],
    text: "Peaceful shades that slow things down."
  },
  angry: {
    colors: ["#9D0208", "#DC2F02", "#FFBA08"],
    text: "Intense and powerful emotions."
  },
  love: {
    colors: ["#FF4D6D", "#FF8FA3", "#FFC2D1"],
    text: "Warm, emotional, and soft."
  }
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const emotion = button.dataset.emotion;
    const data = emotions[emotion];

    palette.innerHTML = "";

    data.colors.forEach(color => {
      const div = document.createElement("div");
      div.classList.add("color-box");
      div.style.backgroundColor = color;
       div.addEventListener("click", () => {
        navigator.clipboard.writeText(color);
        copyMsg.textContent = `Copied ${color} 🎉`;
        copyMsg.style.opacity = 1;

        setTimeout(() => {
          copyMsg.style.opacity = 0;
        }, 1200);
      });
      palette.appendChild(div);
    });

    emotionText.textContent = data.text;
  });
});

