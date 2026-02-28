function fetchProducts(limit, skip){
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(async(result) => {
        var data = await result.json();
        var products = data.products;
        displayProducts(products);
    })
    .catch(() => {
        console.log('Promise Incomplete') 
    })
}


function displayProducts(products){

    var output = '';

    products.forEach((value, index) => {

        output += `
            <div class="products">
                <div class="product_image">
                    <img src="${ value.thumbnail }"/>
                </div>

                <div class="product_content">
                    <h2> ${ value.title } </h2>
                    <p> ${ value.description } </p>
                </div>
            </div>
        `;
    })

    document.getElementById('products').innerHTML = output;
}

var limit = 12;
var page = 1;
var skip = 0;

fetchProducts(limit, skip);

function previous(){
    if(page > 1){
        page--;
        skip = (page - 1) * limit;
        fetchProducts(limit, skip)
    }
}

function next(){
    page++;
    skip = (page - 1) * limit;
    fetchProducts(limit, skip)
}



// fetch('https://dummyjson.com/products')
// .then(async(result) => {
//     console.log(await result.json())
// })
// .catch(() => {
//     console.log('Promise Incomplete') 
// })



// new Promise((accept, reject) => {
//     var products = fetch('https://dummyjson.com/products');
//     // console.log(products)
//     accept(products);
// })
// .then((result) => {
//     // console.log(result.json());
//     // console.log('Promise Complete')
    
//     new Promise((complete, incomplete) => {
//         complete(result.json())
//     })
//     .then((result) => {
//         console.log(result.products);
//         console.log('Promise Complete')
//     })
//     .catch(() => {
//         console.log('Promise Incomplete') 
//     })
// })
// .catch(() => {
//     console.log('Promise Incomplete')    
// })
