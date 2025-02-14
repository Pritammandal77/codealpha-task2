const display = document.querySelector(".input")

const appendToDisplay = (input) => {
  display.value  += input;
}

const calculate = () => {
  try {
    display.value = eval(display.value); 
  } catch (error) {
    display.value = error;
  }
};

const clearScreen = () => {
  display.value = "";
}

