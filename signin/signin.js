const emailError = document.getElementById("emailError");
console.log(emailError);

// emailError.innerHTML = "shala"
// console.log(emailError.innerHTML);
const passwordError = document.getElementById("passwordError");

const email = document.forms["loginForm"]["email"];
const password = document.forms["loginForm"]["password"];


window.addEventListener("load", () => {
  console.log("loaded");
  const uname = localStorage.getItem("uname");
  const flag = localStorage.getItem("flag");

  console.log(uname, flag);

  if (uname && flag) {
    window.location.href = "../dashboard/dashboard.html";
  }
});

//Email and password check

email.addEventListener("change", () => {
  if (email.value === "") {
    emailError.innerHTML = "*field is mandatory";
    return;
  }
  emailError.innerHTML = "";
});

password.addEventListener("change", () => {
  if (password.value === "") {
    passwordError.innerHTML = "*field is mandatory";
    return;
  }
  passwordError.innerHTML = "";
});

//****************** Login function **********/

const login = (e) => {
  event.preventDefault();

  if (email.value === "" && password.value === "") {
    emailError.innerHTML = "*field is mandatory";
    passwordError.innerHTML = "*field is mandatory";
    
    return;
  }

  if (email.value === "shalabh@gmail.com" && password.value === "1234") {
    localStorage.setItem("uname", email.value);
    localStorage.setItem("flag", true);
    window.location.href = "../dashboard/dashboard.html";
  } else {
    email.value = "";
    password.value = "";
    alert("Email or password is wrong");
  }
};
