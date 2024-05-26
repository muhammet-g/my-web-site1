const block = document.querySelectorAll(".block");
window.addEventListener("load", function () {
  block.forEach((item) => {
    let numElement = item.querySelector(".num");
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector(".circle");
    setInterval(() => {
      if (count == num) {
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time);
    circle.style.strokeDashoffset = 503 - 503 * (num / 100);
    let dots = item.querySelector(".dots");
    dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
    if (num == 100) {
      dots.style.opacity = 0;
    }
  });
});

const boxs = document.querySelectorAll(".feat-box");

window.addEventListener("scroll", chekBoxes);

function chekBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function updateCopyrightYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var copyrightElement = document.getElementById("copyright-year");

  if (copyrightElement) {
    copyrightElement.textContent = currentYear;
  }
}

updateCopyrightYear();
