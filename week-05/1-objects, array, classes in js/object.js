const person = {
    x:10,
    firstName: "Aditya",
    lastName: "Raj",
    hobbies: ['Coding', 'Gaming'],
    isMarrid: false,
    hasGf: false,
    hadGf: false,
    hadCrush: Infinity,
    getFullName : function(){
        return 'Aditya Raj'
    },
    address:{
        hno: 1,
        street: 2,
        countryCode: 'IN',
        state: 'HR'
    }
}

console.log(person.address.countryCode);

// UseCase of Object - Group krne k liye

const remote ={
    color: "Black",
    brand: "Xyz Comany",
    dimensions: {height: 1, width: 1},
    turnOff: function(){
        
    }
}