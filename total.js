function calculateTotal(cartItems) {
  // Use reduce to accumulate the total cost
  return cartItems.reduce((total, product) => {
    // For each product, calculate price * quantity and add it to the total
    return total + product.price * product.quantity;
  }, 0); // Initialize the total as 0
}

// Example usage:
const cart = [
  { name: 'Laptop', price: 1000, quantity: 2 },
  { name: 'Phone', price: 500, quantity: 1 },
  { name: 'Headphones', price: 100, quantity: 3 }
];

const totalCost = calculateTotal(cart);
console.log(`Total cost: $${totalCost}`); // Output: Total cost: $2800
