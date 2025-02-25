// Code Question 5 (Bonus)
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
		age: 29,
	},
};
// copia solo dell'oggetto annidato restaurant
const newRestaurant = { ...hamburger.maker.restaurant };
// rinomino la proprietà name dell'oggetto restaurant
newRestaurant.name = "Hyur's II";
// rinomino la proprietà adress dell'oggetto restaurant
newRestaurant.address = "Second Street, 12";

// copia dell'oggetto hamburger senza oggetti annidati quindi i dati si modificano anche sull'oggetto hamburger
const secondBurger = { ...hamburger };
// creo una reference al ristorante
secondBurger.maker.restaurant = newRestaurant;
// rinomino il nome dello chef
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
console.log(hamburger.maker.name); // Chef Hyur
console.log(secondBurger.maker.name); // Chef Hyur
console.log(hamburger.maker.restaurant.name); // Hyur's II
console.log(secondBurger.maker.restaurant.name); // Hyur's II

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 5
