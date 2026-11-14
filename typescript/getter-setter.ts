class Circle
{
    radius:number;
    constructor(radius:number)
    {
        this.radius=radius;
    }
    area()
    {
        return Math.PI*this.radius*this.radius;
    }
}
let c = new Circle(10);
console.log('Area ',c.area());

class Item
{
    name:string;
    price:number;
    qty:number;
    constructor(name:string,price:number,qty:number)
    {
        this.name=name;
        this.price=price;
        this.qty=qty;
    }
    get total()
    {
        console.log('getter total ');
        return this.price*this.qty;
    }
}
let item = new Item('Apple',10,2);
console.log('Total ',item.total);