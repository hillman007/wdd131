const productSelect = document.querySelector("#product");
const counterDisplay = document.querySelector("#reviews");

const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function createProductList() {
  if (!productSelect) return;
  products.forEach(p => {
    const optElement = document.createElement("option");
    optElement.value = p.id;
    optElement.textContent = p.name;
    productSelect.appendChild(optElement);
  });
}

function getReviewCount() {
  return Number(localStorage.getItem("tally")) || 1;
}

function displayReviewCount() {
  if (counterDisplay) {
    counterDisplay.textContent = getReviewCount();
  }
}

function tallyReviews() {
  let counter = getReviewCount() + 1;
  localStorage.setItem("tally", counter);
  displayReviewCount();
}

// Initialize
createProductList();
displayReviewCount();

// Export tallyReviews if needed elsewhere
// window.tallyReviews = tallyReviews;