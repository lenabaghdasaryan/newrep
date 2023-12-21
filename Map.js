
//Product Inventory: Create a Map to represent a product inventory. Each product has a unique ID (use time to get unique values) as the key and an object with productName, price, and quantity as the value. Implement functions to add products, update quantities, and calculate the total value of the inventory.

function createProductInventory() {
    let inventory = new Map();

    function addProduct(ID, productName, price, quantity) {

        if (inventory.has(ID)) {
            let existingProd = inventory.get(ID)
            existingProd.prodQuantity += quantity
        }
        else {

            inventory.set(ID, {
                prodName: productName,
                prodPrice: price,
                prodQuantity: quantity
            })
        }
        return inventory
    }
    function getTotalValue() {
        let totalValue = 0
        inventory.forEach(elem => {
            totalValue += elem.prodQuantity * elem.prodPrice
        })

        return totalValue

    }

    return { addProduct, getTotalValue }
}
const res = createProductInventory()
console.log(res.addProduct(124578, 'bread', 100, 50));
console.log(res.addProduct(124578, 'bread', 100, 50));
console.log(res.addProduct(124579, 'meat', 10, 4000));
console.log(res.getTotalValue())