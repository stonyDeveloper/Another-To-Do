// Given the following Objects:
let academyStudent = {
    name: "Daniel",
    location: "Lagos",
};

let house = {
    name: "Bungalow",
    location: "Lagos",
};
// Write a function that will enable us to dynamically access the properties of the objects USING THIS KEYWORD

// (50 points)
let obj;

function accessProperty(obj) {
    for (let i = 0;
        (i = obj.length); obj++) {
        return this[i];
    }
}