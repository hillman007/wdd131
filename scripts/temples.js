const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
}

const currentYear = document.getElementById("currentyear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.querySelector("#lastmodified");
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modified: ${document.lastModified}`;
}