//initialise starting array of cheeses
let cheeses = [
    { 
        id: 1, 
        image: "https://images.unsplash.com/photo-1612544409881-b34e29453666?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'PZ Signature Cheddar', 
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 
        type: 'Cheddar', 
        taste: 'Sharp',
        colour: 'Bright Yellow',
        pricePerKg: 22.50, 
    },
    { 
        id: 2, 
        image: "https://images.unsplash.com/photo-1605466237780-80b87584957b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Mummas Mozzarella', 
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 
        type: 'Mozzarella', 
        taste: 'Mild',
        colour: 'Cream',
        pricePerKg: 75.30, 
    },
    { 
        id: 3, 
        image: "https://images.unsplash.com/photo-1677332698305-4275bc361bec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Best Swiss Ever', 
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 
        type: 'Swiss', 
        taste: 'Nutty',
        colour: 'Soft Yellow',
        pricePerKg: 26.25, 
    },
    { 
        id: 4, 
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Big Strong Blue', 
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 
        type: 'Blue', 
        taste: 'Strong',
        colour: 'Speckled',
        pricePerKg: 37.25, 
    },
    { 
        id: 5, 
        image: "https://images.unsplash.com/photo-1601912262302-9c7ea3e60fe0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Good As Gouda', 
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 
        type: 'Gouda', 
        taste: 'Rich',
        colour: 'Yellow',
        pricePerKg: 58.80, 
    }
  ];

//GET ALL CHEESES
function getCheeses() {
    return cheeses;
}

//SEARCH FOR A SPECIFIC CHEESE
function findCheese(id) {
    return cheeses.find(cheese => cheese.id === id)
}

//CREATE A NEW CHEESE
function createCheese(newCheese) {
    
    if (cheeses.some(cheese => cheese.id === newCheese.id)) {
        return null //sorry, that cheese already exists in the list, make one with a different id
    } else {
        cheeses.push(newCheese)
        return cheeses
    }
}

//UPDATE AN EXISTING CHEESE
function updateCheese(id, newCheese) {
    let cheeseIndex = cheeses.findIndex(cheese => cheese.id === id)
    
    if(cheeseIndex !== -1) {
        cheeses[cheeseIndex] = {...cheeses[cheeseIndex], ...newCheese}
        return cheeses[cheeseIndex]
    } else {
        //do nothing because it didn't exist
        return null
    }
}

//DELETE A SPECIFIC CHEESE
function deleteCheese(id) {
    let cheeseIndex = cheeses.findIndex(cheese => cheese.id === id)
    
    if(cheeseIndex !== -1) {
        const deletedCheese = cheeses[cheeseIndex]
        cheeses.splice(cheeseIndex, 1) //get rid of that cheese from the cheeses
        return deleteCheese
    } else {
        //do nothing because it didn't exist
        return null
    }
}

module.exports = { getCheeses, deleteCheese, updateCheese, findCheese, createCheese }