const loadAllMeals = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals))
    .catch((error) => console.log(error));
};

const displayMeals = (meals) => {
  const mealContainer = document.getElementById("all-foods");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    const card = document.createElement("div");
    card.classList.add("g-col-4");
    card.setAttribute("style", "cursor:pointer");

    card.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">Meal origin: ${meal.strArea}.</p>
                <p class="card-text">Meal category: ${meal.strCategory}.</p>
            </div>
        </div>
    </div>
      `;

    mealContainer.appendChild(card);
  });
};

const searchMeals = (data) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));

  // console.log(url);
};

document.getElementById("search-btn").addEventListener("click", () => {
  const inputField = document.getElementById("search-input");
  const inputValue = inputField.value;

  inputField.value = "";

  searchMeals(inputValue);
});

loadAllMeals();
