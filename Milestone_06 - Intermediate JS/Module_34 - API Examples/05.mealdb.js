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
    .then(data => console.log(data.meals));
}
