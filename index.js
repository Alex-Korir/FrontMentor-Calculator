const billInput = document.querySelector("#billInput");
const tipPercent = document.querySelectorAll("#buttons");
const customBtn = document.querySelector(".custom-percent");
const tipOutputed = document.querySelector("#tipOutput");
const peopleNumber = document.querySelector("#numberPeople");
const totalOutput = document.querySelector("#totalOutput");
const resetting = document.querySelector("#resetting");
const custom = document.getElementById("cotton");

// Choosing the percentage tip that should be taken from the total amount

for (i = 0; i < tipPercent.length; i++) {
  tipPercent[i].addEventListener("click", percentage);
  function percentage() {
    prayer = this.value;
    if (prayer === "5") {
      const zoom = billInput.value / peopleNumber.value;
      const sheph = (prayer / 100) * zoom;
      const result = sheph.toFixed(2);
      const stat = (zoom + sheph).toFixed(2);
      tipOutputed.innerHTML = "$" + result;
      totalOutput.innerHTML = "$" + stat;
    } else if (prayer === "10") {
      const zoom = billInput.value / peopleNumber.value;
      const sheph = (prayer / 100) * zoom;
      const result = sheph.toFixed(2);
      const stat = (zoom + sheph).toFixed(2);
      tipOutputed.innerHTML = "$" + result;
      totalOutput.innerHTML = "$" + stat;
    } else if (prayer === "15") {
      const zoom = billInput.value / peopleNumber.value;
      const sheph = (prayer / 100) * zoom;
      const result = sheph.toFixed(2);
      const stat = (zoom + sheph).toFixed(2);
      tipOutputed.innerHTML = "$" + result;
      totalOutput.innerHTML = "$" + stat;
    } else if (prayer === "25") {
      const zoom = billInput.value / peopleNumber.value;
      const sheph = (prayer / 100) * zoom;
      const result = sheph.toFixed(2);
      const stat = (zoom + sheph).toFixed(2);
      tipOutputed.innerHTML = "$" + result;
      totalOutput.innerHTML = "$" + stat;
    } else if (prayer === "50") {
      const zoom = billInput.value / peopleNumber.value;
      const sheph = (prayer / 100) * zoom;
      const result = sheph.toFixed(2);
      const stat = (zoom + sheph).toFixed(2);
      tipOutputed.textContent = "$" + result;
      totalOutput.textContent = "$" + stat;
    } else {
    }
  }
}

custom.addEventListener("input", outputed);

// Keeping one button active at a time
const selection = document.querySelector("#select");
tipPercent.forEach((button) => {
  button.addEventListener("click", function () {
    selection.querySelector(".active").classList.remove("active");
    button.classList.add("active");
  });
});

// Resetting the app to its empty state
resetting.addEventListener("click", removing);
function removing() {
  billInput.value = "";
  peopleNumber.value = "";
  tipOutputed.innerHTML = "$" + "0.00";
  totalOutput.innerHTML = "$" + "0.00";
}
function outputed() {
  const prod = billInput.value / peopleNumber.value;
  logging = this.value;
  const leg = (logging / 100) * prod;
  const lamm = leg.toFixed(2);
  const boon = parseFloat(leg + prod).toFixed(2);
  tipOutputed.textContent = "$" + lamm;
  totalOutput.textContent = "$" + boon;
}
