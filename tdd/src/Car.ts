class Engine
{
    constructor() {
    }
    start()
    {
        console.log('Engine started');
    }
}
class Car
{
    engine:Engine;
    constructor(engine:Engine) {
        this.engine = engine;
    }
    start()
    {
        console.log('Car Started');
        this.engine.start();
    }
}
let engine =new Engine();
let car = new Car(engine);
car.start();