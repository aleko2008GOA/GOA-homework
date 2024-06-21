const div = document.getElementById("container");
const paragrap = document.getElementById("paragrap");

fetch("https://fakestoreapi.com/products")
    .then(request => {
        return request.json();
    })
    .then(result =>{
        paragrap.innerHTML = result[0].id;
    }).catch(err => console.log(err, "My error"));