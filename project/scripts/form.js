const counterDisplay = document.querySelector("#reviews");

function getReviewCount() {
  return Number(localStorage.getItem("tally")) || 1;
}

function displayReviewCount() {
  if (counterDisplay) {
    const count = getReviewCount();
    counterDisplay.textContent = `You are the ${count} person to submit a recipe. Thank you for helping us grow our collection!`;
  }
}

function tallyReviews() {
  let counter = getReviewCount() + 1;
  localStorage.setItem("tally", counter);
  displayReviewCount();
}

// Initialize
displayReviewCount();