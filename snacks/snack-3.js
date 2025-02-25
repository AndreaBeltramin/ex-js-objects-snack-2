// Code Question 3
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 9 oggetti: 3 oggetti hamburger, 3 oggetti maker, 3 oggetti restaurant.