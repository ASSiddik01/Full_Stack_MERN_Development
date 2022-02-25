// Step 1
const searchFood = () => {
  const searchFiled = document.getElementById('search_field');
  const searchText = searchFiled.value;
  // console.log(searchText);
  searchFiled.value = '';
  // Step 2
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  // console.log(url);
  // Step 3
  fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data.meals));
    // Step 5
    .then(data => displayFood(data.meals));
}

// Step 4
const displayFood = meals => {
  // console.log(meals)
  const searchResult = document.getElementById('search_result');
  // Step 7
  searchResult.innerHTML = '';
  // step 6
  meals.forEach(meal => {
    // console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
                <!-- ...........Step 8........... -->
          <div onclick="loadFoodDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
            </div>
          </div>
        `;
    searchResult.appendChild(div);
  })
}

// Step 7
const loadFoodDetail = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data.meals[0]));
    // Step 10
    .then(data => displayMealDetaile(data.meals[0]));
}

// Step 9
const displayMealDetaile = meal => {
  // console.log(meal);
  const mealDetailes = document.getElementById('meal_detiles');
  // console.log(mealDetailes);
  // Step 12
  mealDetailes.textContent = '';
  // Step 11
  const div = document.createElement('div');
  div.classList.add('card')
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Youtube links</a>
  </div>
  `;
  mealDetailes.appendChild(div);
}