class Human
{
    name:string;
    _age:number;
    constructor(name:string,age:number)
    {
        this.name = name;
        this._age = age;
    }
    set age(newValue:number)
    {
        console.log('set age ',newValue);
        if(newValue<100 && newValue>0)
        {
            this._age = newValue;
        }
    }
    
}
let h:Human = new Human("Jhon",34);
console.log('h ',h);
h.age = 200;
console.log('h ',h);