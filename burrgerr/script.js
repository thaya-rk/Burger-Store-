document.addEventListener("DOMContentLoaded", function() {
    const ingredientButtons = document.querySelectorAll(".ingredient");
    const addIngredientButton = document.getElementById("add-ingredient");
    const removeIngredientButton = document.getElementById("remove-ingredient");
    const burgerDisplay = document.querySelector(".burger");
    const totalPrice = document.getElementById("total-price");

    let ingredients = [];
    let price = 0.00;

    ingredientButtons.forEach(button => {
        button.addEventListener("click", () => {
            const ingredient = button.innerText;
            const ingredientPrice = parseFloat(button.getAttribute("data-price"));
            ingredients.push({ name: ingredient, price: ingredientPrice });
            price += ingredientPrice;
            updateBurger();
        });
    });

    addIngredientButton.addEventListener("click", () => {
        if (ingredients.length === 0) {
            alert("Please add an ingredient first.");
            return;
        }
        ingredients.pop();
        price -= ingredients[ingredients.length - 1].price;
        updateBurger();
    });

    removeIngredientButton.addEventListener("click", () => {
        if (ingredients.length === 0) {
            alert("No ingredients to remove.");
            return;
        }
        price -= ingredients.pop().price;
        updateBurger();
    });

    function updateBurger() {
        const burgerIngredients = ingredients.map(ingredient => ingredient.name);
        burgerDisplay.textContent = burgerIngredients.join(" + ");
        totalPrice.textContent = price.toFixed(2);
    }
});
