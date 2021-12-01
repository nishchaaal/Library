// variables
const booksName = document.querySelector(".books-name");
const authorsName = document.querySelector(".authors-name");
const noOfPages = document.querySelector(".no-of-pages");
const statusSelect = document.querySelector("#status-select");
const btnAdd = document.querySelector(".btn-add");
const table = document.querySelector(".table");
const tableBody = document.querySelector(".table-body");

let myLibrary = [];

// Constructors
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// button add row
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    booksName.value !== "" &&
    authorsName.value !== "" &&
    noOfPages.value !== "" &&
    statusSelect.value !== ""
  ) {
    addToTable(
      booksName.value,
      authorsName.value,
      noOfPages.value,
      statusSelect.value
    );
    myLibrary.push(
      new Book(
        booksName.value,
        authorsName.value,
        noOfPages.value,
        statusSelect.value
      )
    );
    booksName.value = "";
    authorsName.value = "";
    noOfPages.value = "";
    statusSelect.value = "";
  } else {
    alert("Please enter every value");
  }
});

// adding to table
const addToTable = (name, author, page, rNr) => {
  const newTr = document.createElement("tr");
  if (rNr === "Read") {
    newTr.innerHTML = `<td>${name}</td>
                     <td>${author}</td> 
                     <td>${page}</td>
                     <td><span class="read">${rNr}</span></td>  
                     <td><button class="btn btn-del">Delete</button></td>`;
  } else {
    newTr.innerHTML = `<td>${name}</td>
                     <td>${author}</td> 
                     <td>${page}</td>
                     <td><span class="not-read">${rNr}</span></td>  
                     <td><button class="btn btn-del">Delete</button></td>`;
  }

  tableBody.appendChild(newTr);
  newTr.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-del")) {
      e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains("read")) {
      e.target.classList.remove("read");
      e.target.classList.add("not-read");
      e.target.innerText = "Not Read";
    } else if (e.target.classList.contains("not-read")) {
      e.target.classList.remove("not-read");
      e.target.classList.add("read");
      e.target.innerText = "Read";
    }
  });
};
