const uname = localStorage.getItem("uname");
const flag = localStorage.getItem("flag");

console.log(uname, flag);

if (!(uname && flag)) {
  window.location.href = "../signin/signin.html";
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tableBody = document.querySelector(".table-body");
const overlay = document.querySelector(".overlay");

const addEmpForm = document.querySelector(".add-employee");

const closeForm = document.querySelector(".cross-add-emp");

for (i in arr) {
  let tr = document.createElement("tr");
  //console.log(i)

  if (arr[i] % 2 === 0) {
    tr.classList.add("tr-background");
    tr.innerHTML =
      '<td scope="row"><input type="checkbox" aria-label="Checkbox for following text input"></td><td>Abhishek</td>\
        <td>123456</td>\
        <td>Male</td>\
        <td>SDE</td>\
        <td>123456</td>\
        <td>abhishek@gmail.com</td>\
        <td>22 feb 2000</td>\
        <td>22 feb 2018</td>';
  } else {
    tr.innerHTML =
      '<td scope="row"><input type="checkbox" aria-label="Checkbox for following text input"></td><td>Abhishek</td>\
        <td>123456</td>\
        <td>Male</td>\
        <td>SDE</td>\
        <td>123456</td>\
        <td>abhishek@gmail.com</td>\
        <td>22 feb 2000</td>\
        <td>22 feb 2018</td>';
  }

  tableBody.appendChild(tr);
}

const add = () => {
  overlay.classList.remove("hidden");
  addEmpForm.classList.remove("hidden");
};

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  addEmpForm.classList.add("hidden");
});

closeForm.addEventListener("click", () => {
  overlay.classList.add("hidden");
  addEmpForm.classList.add("hidden");
});
