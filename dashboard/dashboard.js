console.log("Dashboard loaded");

const uname = localStorage.getItem("uname");
const flag = localStorage.getItem("flag");

console.log(uname, flag);

if (!(uname && flag)) {
  window.location.href = "../signin/signin.html";
}


//******* For Log out function */

const logOut = document.getElementById("logOut");

logOut.addEventListener("click", () => {
    localStorage.removeItem("uname")
    localStorage.removeItem("flag")

    window.location.href = "../signin/signin.html"
})
