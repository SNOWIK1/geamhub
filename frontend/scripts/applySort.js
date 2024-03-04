async function getSortOptions() {
  const crit = document.querySelector("#criteria").value;

  const sortby = document.querySelector("#sortby").value;

  console.log(crit, sortby);

  const baseURL = "http://localhost:5000/catalog"
  const newUrl = `${baseURL}?crit=${crit}&sortby=${sortby}`;
  window.location.href = newUrl; // Перенаправляем пользователя на новый URL
}
