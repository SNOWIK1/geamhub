async function getSortOptions() {
  const criteria = document.querySelector("#criteria").value;

  const sortby = document.querySelector("#sortby").value;

  console.log(criteria, sortby);

  const baseURL = "http://localhost:5000/catalog"
  const newUrl = `${baseURL}?criteria=${criteria}&sortby=${sortby}`;
  window.location.href = newUrl; // Перенаправляем пользователя на новый URL
}
