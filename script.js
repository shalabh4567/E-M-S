window.addEventListener("load", () => {
  console.log("loaded");
  const uname = localStorage.getItem("uname");
  const flag = localStorage.getItem("flag");

  console.log(uname, flag);

  if (uname && flag) {
    window.location.href = "../dashboard/dashboard.html";
  }
});
