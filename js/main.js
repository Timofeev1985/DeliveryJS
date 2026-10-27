const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}
//day 1
const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");

const cardsRestaurants = document.querySelector(".cards-restaurants");

let login = localStorage.getItem("delivery");
function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
}

function autorized() {
  console.log("Авторизован");
  function logOut() {
    login = null;
    localStorage.removeItem("delivery");
    buttonAuth.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    buttonOut.removeEventListener("click", logOut);

    checkOut();
  }
  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";
  userName.textContent = login;
  buttonOut.addEventListener("click", logOut);
}
function notAutorized() {
  console.log("Не авторизован");
  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;
    console.dir(login);
    if (login == "") {
      loginInput.style.border = "1px solid red";
      loginInput.placeholder = "Введите логин";
    } else {
      loginInput.style.border = "1px solid black";
      localStorage.setItem("delivery", login);
      toggleModalAuth();
      buttonAuth.removeEventListener("click", toggleModalAuth);
      closeAuth.removeEventListener("click", toggleModalAuth);
      logInForm.removeEventListener("submit", logIn);
      logInForm.reset();
      checkOut();
    }
  }
  buttonAuth.addEventListener("click", toggleModalAuth);
  closeAuth.addEventListener("click", toggleModalAuth);
  logInForm.addEventListener("submit", logIn);
}
function checkOut() {
  if (login) {
    autorized();
  } else {
    notAutorized();
  }
}
checkOut();
//day 2
function createCardRestaurant() {
  const card = `
  <a class="card card-restaurant">
						<img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">Пицца плюс</h3>
								<span class="card-tag tag">50 мин</span>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="rating">
									4.5
								</div>
								<div class="price">От 900 ₽</div>
								<div class="category">Пицца</div>
							</div>
							<!-- /.card-info -->
						</div>
						<!-- /.card-text -->
					</a>
 `;
  cardsRestaurants.insertAdjacentHTML("beforeend", card);
}
createCardRestaurant();
function openGoods(event) {
  const target = event.target;
  console.log(event);
}
cardsRestaurants.addEventListener("click", openGoods);
