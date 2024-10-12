const objLiteral = {};
objLiteral.name = "Shailender Singh"
console.log(objLiteral);

const ObjCreate = Object.create({});
ObjCreate.name = "Shailender Singh";
console.log(ObjCreate);

function objConstructor(name) {
    this.name = name;
}

let obj = new objConstructor("Shailender Singh");
console.log(obj);

class objClass {
    constructor(name){
        this.name = name;
    } 
}

let object = new objClass('Shailender');
console.log(object);