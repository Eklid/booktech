let productImage = document.getElementById("firstPhoto");
let photosName = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let names = ["Lydia Jane", "Jessica Baker", "Mike Jackson"];
let jobs = ["Vice President", "Marketing Head", "President"];

let name = document.getElementById("name");
let job = document.getElementById("job");
let pozicioni = 0;
let booknameElement = document.getElementById("bookname");

function onSearch() {
  let bookname;
  bookname = booknameElement.value;
  //moving to another page while holding the value
  window.location.href = "book-details.html?bookname=" + bookname;
}

function onNext() {
  if (pozicioni == 2) {
    pozicioni = 0;
  } else if (pozicioni != 2) {
    pozicioni = pozicioni + 1;
  }
  productImage.src = photosName[pozicioni];

  name.innerText = names[pozicioni];
  job.innerText = jobs[pozicioni];
}

function onPrevious() {
  if (pozicioni == 0) {
    pozicioni = 2;
  } else if (pozicioni != 0) {
    pozicioni = pozicioni - 1;
  }

  productImage.src = photosName[pozicioni];
  name.innerText = names[pozicioni];
  job.innerText = jobs[pozicioni];
}
