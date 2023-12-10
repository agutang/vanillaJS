const helloArray = ["안녕하세요", "어서오세요", "환영합니다", "반갑습니다"];
const loginForm = document.querySelector(".login__input-form");
const usernameInput = document.querySelector(".username");
const hello = document.querySelector(".hello");
const savedUsername = localStorage.getItem("username");

function loginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", usernameInput.value);
  loginForm.classList.add("hidden");
  sayHello(localStorage.getItem("username"));
}

function sayHello(username) {
  hello.classList.remove("hidden");
  const helloMessage =
    helloArray[Math.floor(Math.random() * helloArray.length)];
  hello.innerText = `${helloMessage} ${username}`;
}

loginForm.addEventListener("submit", loginSubmit);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
} else {
  sayHello(savedUsername);
}
