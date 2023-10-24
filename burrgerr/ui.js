class UI {
   constructor(){
      this.productsContainer = document.querySelector('.products');
      this.cartItems = document.querySelector('.cartItems');
      this.subTotal = document.querySelector('.subtotal');
      this.summary = document.querySelector('.summary');
      this.summaryTotals = document.querySelector('.total');
      this.deliveryLocation = document.querySelector('location');
   }

    displayProducts(imgSrc,title,price,size,topping,id){
       this.productsContainer.innerHTML +=`
       <div class="col">
        <div class="card mt-3" style="width: 18rem;">
         <img src=${imgSrc} class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-title">Crust: ${title}</p>
          <p>Price: $${price}</p>
          <p>Size: ${size}</p>
          <label for="cars">Choose topping:</label>
            <select name="cars" id="cars">
                <option value="mushroom">${topping}</option>
                <option value="pepperoni">pepperoni</option>
                <option value="bacon">bacon</option>
            </select>
            <buttton class="button" onClick="addToCart(${id})">Add to cart</button>
        </div>
       </div> 
       `
    }
    appendToCart(imgSrc,title,size,price,id,numberOfUnits){
       this.cartItems.innerHTML += `
       <div>
        <div class="content">
            <div>
                <img class="cartImg" src=${imgSrc}>
            </div>
            <div class="info">
                <h5>Crust:${title}</h5>
               <h5>Size: ${size}</h5>
                <h5>Price: ${price}</h5>
           </div>
           <div class="units">
             <div class="btn minus" onClick="changeNumberOfUnits('minus',${id})">-</div>
             <div class="number">${numberOfUnits}</div>
             <div class="btn plus" onClick="changeNumberOfUnits('plus',${id})">+</div>    
           </div>
         </div>
       </div>
       `
    }
    getSubTotal(totalprice,totalUnits){
       this.subTotal.innerHTML = `
         SUBTOTAL (${totalUnits} items): $${totalprice}
       
       `
    }
    appendToSummary(title,size,price,numberOfUnits,totalprice){
       this.summary.innerHTML += `
       <div>
           <h6>Item: ${title}</h6>
           <h6>Size: ${size}</h6>
           <h6>Price: $${price}<h6>
           <h6>Number of units: ${numberOfUnits}</h6>
        </div>
       `
    }
    appendTotals(totalUnits,totalprice){
       this.summaryTotals.innerHTML = `SUBTOTAL (${totalUnits} items): $${totalprice}`;
    }
   //  update location
   appendLocation(location){
      this.deliveryLocation.innerHTML = `
         <h5>Your order will be delivered to ${location}</h5>
      `
   }
}