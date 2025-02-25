// Code Question 4
const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
};

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: "Main Street",
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Il metodo migliore è lo spread perchè fa una copia dell'intero oggetto chef in quanto non ci sono oggetti annidati e
// copia anche la funzione all'interno della proprietà makeBurger

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// Il metodo migliore per clonare l'oggetto restaurant è structuredClone() (visto che non ha funzioni tra le sue
// proprietà) perchè fa una copia di tutti gli oggetti annidati e copia anche gli oggetti complessi come Date
