
class items {
  constructor(id, name, description, imageSrc) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageSrc = imageSrc;
    
  }
}

// Menu Item list
// const menuCard = [
//   new items(
//     1,
//     "Cheesy Chicken Garlic Bread1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     2,
//     "Cheesy Chicken Garlic Bread2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    
//     "img/menu/section_one/img1.jpg",
//   ),
//   new items(
//     3,
//     "Cheesy Chicken Garlic Bread3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    
//     "img/menu/section_one/img2.jpg",
//   ),
//   new items(
//     4,
//     "Cheesy Chicken Garlic Bread4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     5,
//     "Cheesy Chicken Garlic Bread5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     6,
//     "Cheesy Chicken Garlic Bread6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     7,
//     "Cheesy Chicken Rice1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     8,
//     "Cheesy Chicken Rice2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     9,
//     "Cheesy Chicken Rice3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     10,
//     "Cheesy Chicken Rice4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     11,
//     "Cheesy Chicken Rice5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     12,
//     "Cheesy Chicken Rice6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     13,
//     "Cheesy Chicken Pasta1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     14,
//     "Cheesy Chicken Pasta2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     15,
//     "Cheesy Chicken Pasta3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     16,
//     "Cheesy Chicken Pasta4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     17,
//     "Cheesy Chicken Pasta5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     18,
//     "Cheesy Chicken Pasta6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     19,
//     "Chocalet Cake1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     20,
//     "Chocalet Cake2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     21,
//     "Chocalet Cake3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     22,
//     "Chocalet Cake4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     23,
//     "Chocalet Cake5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     24,
//     "Chocalet Cake6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   )
   
// ];

function getItemData(id) {
  openModel(id);

}

function openModel(id) {
 
  const bundle = menuCard[id];
  
  const modalImageDiv = document.getElementById('modalImageDiv');
  const itemDescription = document.getElementById('itemDescription');
  const itemName = document.getElementById('itemName');

  modalImageDiv.innerHTML = `<img src="${bundle.imageSrc}" width="100%">`;
  itemDescription.innerHTML = `${bundle.description}`;
  itemName.innerHTML = `${bundle.name}`;

}

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Cheesy Chicken Garlic Bread',
        price:1030,
        tag:'Cheesy Chicken Garlic Bread',
        inCart:0
    },
    {
        name:'Garlic Toast',
        price:600,
        tag:'Garlic Toast',
        inCart:0
    },
    {
        name:'Garlic Bread',
        price:600,
        tag:'Garlic Bread',
        inCart:0
    },
    {
        name:'Kotchchi Sausage Puff Pastry',
        price:1600,
        tag:'Kotchchi Sausage Puff Pastry',
        inCart:0
    },
    {
        name:'Cheesy Garlic Toast',
        price:850,
        tag:'Cheesy Garlic Toast',
        inCart:0
    },
    {
        name:'Wing It-BBQ(6PCs)',
        price:1170,
        tag:'Wing It-BBQ(6PCs)',
        inCart:0
    },
    {
        name:'Chicken Rice',
        price:900,
        tag:'Chicken Rice',
        inCart:0
    },
    {
        name:'Mix Chicken Rice',
        price:1600,
        tag:'Mix Chicken Rice',
        inCart:0
    },
    {
        name:'Italian mushroom risotto',
        price:1900,
        tag:'Italian mushroom risotto',
        inCart:0
    },
    {
        name:'Parboiled Rice',
        price:1800,
        tag:'Parboiled Rice',
        inCart:0
    },
    {
        name:'Spaghetti with Chicken',
        price:6500,
        tag:'Spaghetti with Chicken',
        inCart:0
    },
    {
        name:'Spaghetti Bolognaise - Chicken',
        price:1430,
        tag:'Spaghetti Bolognaise - Chicken',
        inCart:0
    },
    {
        name:'Creamy Seafood Pasta & Cheese',
        price:1700,
        tag:'Creamy Seafood Pasta & Cheese',
        inCart:0
    },
    {
        name:'Crispy Nougat Cake',
        price:6500,
        tag:'Crispy Nougat Cake',
        inCart:0
    },
    {
        name:'Chocolate fudge cake',
        price:7750,
        tag:'Chocolate fudge cake',
        inCart:0
    },
    {
        name:'Mocha and Nougat Cake',
        price:6500,
        tag:'Mocha and Nougat Cake',
        inCart:0
    },
   

]

for(let i=0; i< carts.length;i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i])
      
    })

}
function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    document.querySelector('.cart span').textContent = productNumbers;

}

function cartNumbers(products){
   
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
   
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = 1 + productNumbers;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(products);
    }

    function setItems(products) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems) || {};
    
        if (cartItems[products.tag] === undefined) {
            products.inCart = 1;
            cartItems[products.tag] = products;
        } else {
            cartItems[products.tag].inCart += 1;
        }
    
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
    
function totalCost(products){

    let cartCost = localStorage.getItem('totalCost');
   
    console.log(cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);

        localStorage.setItem("totalCost",cartCost + products.price);
    }
    else{
        localStorage.setItem("totalCost",products.price);
    }
  
}

/*function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
    let productContainer=document.querySelector(".container");
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
       Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
            
            `
       })
    }
} */

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".container .table tbody");

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        let totalCost = 0;
        let cartCount = 1;

        Object.values(cartItems).forEach(item => {
            let subtotal = item.price * item.inCart;
            totalCost += subtotal;

            productContainer.innerHTML += `
                <tr>
                    <th scope="row">${cartCount}</th>
                    <td>${item.name}</td>
                    <td class="font-bold text-center">Rs ${item.price.toFixed(2)}</td>
                    <td>
                        <div class="form-group text-center">
                            <input type="number" class="form-control form-control count_of_item" value="${item.inCart}" min="1" max="100" data-tag="${item.tag}">
                        </div>
                    </td>
                    <td class="font-bold text-center">Rs ${subtotal.toFixed(2)}</td>
                    <td class="text-center"><button class="btn btn-sm btn-danger delete-item" data-tag="${item.tag}">Delete</button></td>
                </tr>
            `;
            cartCount++;
        });

        // Update total cost in the table
        // alert(totalCost.toFixed(2));
        
        // let totalRow = `
        //     <tr>
        //         <td class="col-5"></td>
        //         <td class="col-50" style="font-size: 20px;font-weight:bold;">TOTAL</td>
        //         <td class="col-10"></td>
        //         <td class="col-6"></td>
        //         <td class="col-15 text-center" style="font-size: 20px;font-weight:bold;">Rs ${totalCost.toFixed(2)}</td>
        //         <td></td>
        //         </tr>
        // `;

        //pass total value to view
        document.getElementById("subtotalcost").innerHTML=totalCost.toFixed(2);
        document.getElementById("totalcost").innerHTML=totalCost.toFixed(2);

        // productContainer.innerHTML += totalRow;

        let deleteButtons = document.querySelectorAll('.delete-item');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                let tagToDelete = this.getAttribute('data-tag');
                deleteItem(tagToDelete);
            });
        });
    }
}
document.addEventListener('change', function(event) {
    if (event.target.classList.contains('count_of_item')) {
        let newQuantity = parseInt(event.target.value);
        let itemTag = event.target.dataset.tag;

        updateQuantity(itemTag, newQuantity);
    }
});



/*function updateQuantity(tag, quantity) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems[tag] !== undefined) {
        cartItems[tag].inCart = quantity;
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart(); 
}*/

function updateQuantity(tag, quantity) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems[tag] !== undefined) {
        let prevQuantity = cartItems[tag].inCart;
        cartItems[tag].inCart = quantity;

        // Update total quantity in the header
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers) + quantity - prevQuantity;
        localStorage.setItem('cartNumbers', productNumbers);
        document.querySelector('.cart span').textContent = productNumbers;
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart();
}

function deleteItem(tag) {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems[tag] !== undefined) {
        let itemToDelete = cartItems[tag];
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers) - itemToDelete.inCart;

        delete cartItems[tag];
        localStorage.setItem('cartNumbers', productNumbers);
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        document.querySelector('.cart span').textContent = productNumbers;

        displayCart(); // Refresh cart display after deletion
    }
}



    onLoadCartNumber();
    displayCart();
    