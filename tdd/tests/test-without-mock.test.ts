import {expect} from "@jest/globals";

class Engine
{
    start()
    {
        console.log('Engine started')
    }
}
class Car
{
    engine:Engine;
    constructor(engine:Engine) {
        this.engine = engine;
    }
    //non static
    start()
    {
        console.log('car Started');
        this.engine.start();
    }
}
describe("without mock", () => {
    test("without test car", () => {
        let started = false;
        class MockEngine extends Engine {
            start() {
                started = true;
                console.log('mocked engine started');
            }
        }
        let engine = new MockEngine();
        let car = new Car(engine);
        car.start();
        expect(started).toBe(true);
    })
})