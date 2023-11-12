///PRODUCT EKRANA YAZDIRMA START

const product = document.querySelector('.product');

let productList = {};

// function renderProduct(){
//     for(const todo of productList.todos) {
//         product.innerHTML += `<li> $(todo.todo)</li>`;
//     }
// }

function renderProduct() {
    for (const todo of productList.products) {

        product.innerHTML += `
        <li>
            <h2>${todo.title}</h2>
            <p>${todo.description}</p>
            <p>Price: ${todo.price}</p>
            <p>Discount: ${todo.discountPercentage}%</p>
            <p>Rating: ${todo.rating}</p>
            <p>Stock: ${todo.stock}</p>
            <p>Brand: ${todo.brand}</p>
            <p>Category: ${todo.category}</p>
            <img src="${todo.thumbnail}" alt="${todo.title}" />
            <h3>Images:</h3>
            <ul>
                ${todo.images.map(image => `<li><img src="${image}" alt="${todo.title} image"></li>`).join('')}
            </ul>
        </li>
    `;
    }
}

fetch('https://dummyjson.com/products')
    .then(r => r.json())
    .then(json => {
        productList = json;
        renderProduct();
    })

///PRODUCT EKRANA YAZDIRMA END



///PRODUCT BRAND FİLTRELEME START


const filterInput = document.querySelector('#todoSearch');

filterInput.addEventListener("keyup", filter);

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();

    
    const filteredProducts = productList.products.filter(todo => {
        
        const brandLowerCase = todo.brand.toLowerCase();
        return brandLowerCase.includes(filterValue);
    });

    
    renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
   
    product.innerHTML = '';

    
    for (const todo of filteredProducts) {
        product.innerHTML += `
        <li>
            <h2>${todo.title}</h2>
            <p>${todo.description}</p>
            <p>Price: ${todo.price}</p>
            <p>Discount: ${todo.discountPercentage}%</p>
            <p>Rating: ${todo.rating}</p>
            <p>Stock: ${todo.stock}</p>
            <p>Brand: ${todo.brand}</p>
            <p>Category: ${todo.category}</p>
            <img src="${todo.thumbnail}" alt="${todo.title}" />
            <h3>Images:</h3>
            <ul>
                ${todo.images.map(image => `<li><img src="${image}" alt="${todo.title} image"></li>`).join('')}
            </ul>
        </li>
    `;
    }
}

///PRODUCT BRAND FİLTRELEME END

///PRODUCT CATEGORY FİLTRELEME START
const filterInputCategory = document.querySelector('#todoSearchCategory');

filterInputCategory.addEventListener("keyup", filterCategory);

function filterCategory(e) {
    const filterValue = e.target.value.toLowerCase().trim();

   
    const filteredCategoryProducts = productList.products.filter(todo => {
        
        const categoryLowerCase = todo.category.toLowerCase();
        return categoryLowerCase.includes(filterValue);
    });

    
    renderFilteredProducts(filteredCategoryProducts);
}

function renderFilteredProducts(filteredCategoryProducts) {
    
    product.innerHTML = '';

   
    for (const todo of filteredCategoryProducts) {
        product.innerHTML += `
        <li>
            <h2>${todo.title}</h2>
            <p>${todo.description}</p>
            <p>Price: ${todo.price}</p>
            <p>Discount: ${todo.discountPercentage}%</p>
            <p>Rating: ${todo.rating}</p>
            <p>Stock: ${todo.stock}</p>
            <p>Brand: ${todo.brand}</p>
            <p>Category: ${todo.category}</p>
            <img src="${todo.thumbnail}" alt="${todo.title}" />
            <h3>Images:</h3>
            <ul>
                ${todo.images.map(image => `<li><img src="${image}" alt="${todo.title} image"></li>`).join('')}
            </ul>
        </li>
    `;
    }
}

///PRODUCT CATEGORY FİLTRELEME END