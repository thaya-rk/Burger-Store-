

// init ui
const ui = new UI;

const locationInput = document.getElementById('location');
const unitsInCart = document.querySelector('.totalItemsInCart');

// form event listener
form.addEventListener('keyup',getLocation);

function getLocation(e){
   console.log(locationInput.value);
   if(locationInput.value){
      // alert(`Your order will be delivered to ${locationInput.value}`);
      ui.appendLocation(locationInput.value);
   }

   e.preventDefault();
}

function sendAlert(e){
   const btn = e.target;
   console.log(btn);
   alert('Thank you for shopping with us, we value you!!')
}

products.forEach((product)=>{
   ui.displayProducts(product.imgSrc,product.title,product.price,product.size,product.topping,product.id);
})


// Add  to cart function
let cart = [];
function addToCart(id){
   if(cart.some((item)=> item.id === id)){
      alert('Item already selected');
   }else{
      const item = products.find((product)=> product.id === id)

      cart.push({
         ...item,
         numberOfUnits: 1,
      })
      }

   updateCart();
   }

// update cart function
function updateCart(){
   appendToCart();
   showSummary();
   appendSummaryTotals();
   subTotal();
}

// sub total function
function subTotal(){
   let totalprice = 0, totalUnits = 0;
    cart.forEach((item)=>{
     totalprice += item.price * item.numberOfUnits;
     totalUnits += item.numberOfUnits;
   })
   ui.getSubTotal(totalprice,totalUnits);
   unitsInCart.innerHTML = totalUnits;
}

// append to cart function
function appendToCart(){
   ui.cartItems.innerHTML = "";
   cart.forEach((item)=>{
      ui.appendToCart(item.imgSrc,item.title,item.size,item.price,item.id,item.numberOfUnits);
   })
}
// summary function
function showSummary(){
   ui.summary.innerHTML = "";
   cart.forEach((item)=>{
      ui.appendToSummary(item.title,item.size,item.price,item.numberOfUnits,item.totalprice);
   })
}
function appendSummaryTotals(){
   let totalprice = 0, totalUnits = 0;
   cart.forEach((item)=>{
    totalprice += item.price * item.numberOfUnits;
    totalUnits += item.numberOfUnits;
  })
  ui.appendTotals(totalUnits,totalprice);
}
// change number of units
function changeNumberOfUnits(action,id){
   cart = cart.map((item)=>{
      let numberOfUnits = item.numberOfUnits;

      if(item.id === id){
         if(action === 'minus' && numberOfUnits > 1){
            numberOfUnits--
         }else if(action === 'plus'){
            numberOfUnits++
         }
      }
      return {
         ...item,
         numberOfUnits,
      }
   })
   updateCart();
}
