const route = document.URL.split("/").pop().split(".").shift();

document.title = `${route.toUpperCase()} Page`;
