// This script is from the recipe album project //

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

// Recipe data
const recipes = [
    {
        recipeName: "Classic Pancakes",
        cookTime: "20 minutes",
        mealType: "breakfast",
        image: "images/pancakes.webp"
    },
    {
        recipeName: "Spaghetti",
        cookTime: "45 minutes",
        mealType: "dinner",
        image: "images/spaghetti.webp"
    },
    {
        recipeName: "Chocolate Chip Cookies",
        cookTime: "30 minutes",
        mealType: "dessert",
        image: "images/chocolate_chip_cookies.webp"
    },
    {
        recipeName: "Crepes",
        cookTime: "20 minutes",
        mealType: "breakfast",
        image: "images/crepes.webp"
    },
    {
        recipeName: "Grilled Chicken Salad",
        cookTime: "25 minutes",
        mealType: "dinner",
        image: "images/chicken_salad.webp"
    },
    {
        recipeName: "Apple Crisp",
        cookTime: "40 minutes",
        mealType: "dessert",
        image: "images/apple_crisp.webp"
    },
    {
        recipeName: "Flan",
        cookTime: "3 Hours",
        mealType: "dessert",
        image: "images/flan.webp"
    },
    {
        recipeName: "Arroz con Leche",
        cookTime: "6 Hours",
        mealType: "dessert",
        image: "images/arroz_con_leche.webp"
    },
    {
        recipeName: "Potato Bacon Soup",
        cookTime: "45 minutes",
        mealType: "dinner",
        image: "images/potato_soup.webp"
    },
    {
        recipeName: "French Toast",
        cookTime: "20 minutes",
        mealType: "breakfast",
        image: "images/french_toast.webp"
    },
    {
        recipeName: "Breakfast Sandwich",
        cookTime: "10 minutes",
        mealType: "breakfast",
        image: "images/breakfast_sandwich.webp"
    }
];

function displayRecipes(recipesToShow) {
    const gallery = document.querySelector("#gallery");
    gallery.innerHTML = "";
    recipesToShow.forEach(r => {
        const card = document.createElement("div");
        const recipeHTML = `
            <img src="${r.image}" alt="${r.recipeName}" width="400" height="250" loading="lazy">
            <h3>${r.recipeName}</h3>
            <p><strong>Cook Time:</strong> ${r.cookTime}</p>
            <p><strong>Meal Type:</strong> ${capitalize(r.mealType)}</p>
        `;
        card.innerHTML = recipeHTML;
        gallery.appendChild(card);
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Navigation/filtering
const allRecipesLink = document.querySelector("#all-recipes");
const breakfastLink = document.querySelector("#breakfast");
const dinnerLink = document.querySelector("#dinner");
const dessertLink = document.querySelector("#dessert");
const selection = document.querySelector("#selection");

if (allRecipesLink) {
    allRecipesLink.addEventListener("click", () => {
        displayRecipes(recipes);
        selection.innerText = "All Recipes";
    });
}
if (breakfastLink) {
    breakfastLink.addEventListener("click", () => {
        const filtered = recipes.filter(r => r.mealType === "breakfast");
        displayRecipes(filtered);
        selection.innerText = "Breakfast";
    });
}
if (dinnerLink) {
    dinnerLink.addEventListener("click", () => {
        const filtered = recipes.filter(r => r.mealType === "dinner");
        displayRecipes(filtered);
        selection.innerText = "Dinner";
    });
}
if (dessertLink) {
    dessertLink.addEventListener("click", () => {
        const filtered = recipes.filter(r => r.mealType === "dessert");
        displayRecipes(filtered);
        selection.innerText = "Dessert";
    });
}

// Initial display
displayRecipes(recipes);