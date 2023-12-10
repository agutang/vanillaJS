const date = document.querySelector(".date");
const clock = document.querySelector(".clock");

function clockFunction() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  date.innerText = `${time.getFullYear()}-${
    time.getMonth() + 1
  }-${time.getDate()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(clockFunction, 1000);
