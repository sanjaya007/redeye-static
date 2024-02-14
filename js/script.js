const countdown = document.querySelector(".countdown");
const final = new Date("june 15, 2021, 16:00:00").getTime();

const countInterval = setInterval(function () {
  const now = new Date().getTime();
  const diff = final - now;

  let days = Math.floor(diff / (24 * 60 * 60 * 1000));
  let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((diff % (60 * 1000)) / 1000);

  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  countdown.innerHTML = `${days}D, ${hours}H : ${minutes}M : ${seconds}S`;
}, 1000);

const videoContainer = document.querySelector("#newsVideo");
const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    videoContainer.pause();
  } else {
    switchBtn.classList.remove("slide");
    videoContainer.play();
  }
});
