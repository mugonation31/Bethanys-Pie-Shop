const inventory = {
  apple: { price: 12, qty: 0 },
  cherry: { price: 15, qty: 0 },
  strawberry: { price: 18, qty: 0 },
};

function sum() {
  let total = 0;

  const keys = Object.keys(inventory);

  keys.forEach((key) => {
    total += inventory[key].price * inventory[key].qty;
  });

  return total;
}
