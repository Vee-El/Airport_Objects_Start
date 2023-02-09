class Person {

    // Include a Constructor Method for Properties: 
        // 1. Name
        // 2. Bags
    constructor(name, bags) {
        this.name = name;
        // 2a. Bags should contain/reference a data type for storing more than one bag object.
        this.bags = [];
    }  

    // Include an addBag method
    addBag(bag) {
        this.bags.push(bag);
    }
}

//Export the Module
module.exports = Person;