/* eslint-disable prettier/prettier */
const myName = 'santiago';
const myAge = 12;

const suma = (a: number, b: number) => {
    return a + b;
};

suma(12, 5);
class Persona {

    constructor(private age:number, private name:string){}
    getSummary() {
        return `my name es ${this.name}, ${this.age}`;
    }
}

const newPersona = new Persona(13, 'santiago')
console.log(newPersona.getSummary())
