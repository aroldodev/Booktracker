fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
