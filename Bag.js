const express = require("express");

class Bag {
    // Include constructor Method with the following property: 
        // 1. Weight            
    constructor(weight) {
        if(!weight) {
            //1a. Should handle an exception in case user adds no weight and throw an error.
            throw new Error("bag needs weight")
        }

        this.weight = weight;
    }
}


//Export the module

module.exports = Bag;