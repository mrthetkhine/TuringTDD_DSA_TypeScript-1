import Car from "../src/Car";
import Engine from "../src/Engine";

describe('Test Car with self shunt', () => {
    test('When car start,engine should be started',()=>{

        let started = false;
        class MockedEngine extends Engine{
            start() {
                started = true;
            }
        }
        let engine = new MockedEngine();
        let car = new Car(engine);
        car.start();

        expect(started).toBe(true);
    });
})