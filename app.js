let number = document.getElementById("number");
let counter = 0;

let interval = setInterval(() => {
  if (counter === 100) {
    clearInterval(interval);
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
    document.querySelector('.outer').style.setProperty('--value', counter);
  }
}, 50);
