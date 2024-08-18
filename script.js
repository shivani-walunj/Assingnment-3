const val = document.querySelectorAll(".btn-container")[0];
const display = document.querySelector(".input");
console.log(display);

val.addEventListener("click", (e) => {
  if (e.target.innerHTML == "=") {
    display.value = eval(display.value);
    return;
  } else if (e.target.innerHTML == "DEL") {
    display.value = display.value.slice(0, -1);
    return;
  } else if (e.target.innerHTML == "RESET") {
    display.value = " ";
    return;
  } else if (e.target.innerHTML.length > 1) {
    return;
  }

  display.value = `${display.value}${e.target.innerHTML}`;
});
