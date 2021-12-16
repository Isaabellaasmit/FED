

var buttonWinkelwagen1 = document.querySelector("button.eersteButton");
var buttonWinkelwagen2 = document.querySelector("button.tweedeButton");
var buttonWinkelwagen3 = document.querySelector("button.derdeButton");

/* de button laten luisteren naar clicks */
buttonWinkelwagen1.addEventListener("click", veranderButton);
buttonWinkelwagen2.addEventListener("click", veranderButton);
buttonWinkelwagen3.addEventListener("click", veranderButton);



function veranderButton() {
  /* de p in de vierde section selecteren */
  let buttonElement1 = document.querySelector("button.eersteButton");
  let buttonElement2 = document.querySelector("button.tweedeButton");
  let buttonElement3 = document.querySelector("button.derdeButton");
  /* de class 'anders' aan de p toevoegen */
  /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
  buttonElement1.classList.toggle("verander1");
  buttonElement2.classList.toggle("verander2");
  buttonElement3.classList.toggle("verander3");
  /* toggle voegt toe en verwijdert om-en-om */
}