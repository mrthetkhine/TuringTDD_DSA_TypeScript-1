import Car from "../src/Car";
import Engine from "../src/Engine";

jest.mock('../src/Engine');
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (Engine as any).mockClear();
});
describe('Car', () => {
    test('When car start,engine should be started',()=>{

        let engine = new Engine();
        let car = new Car(engine);
        car.start();

        const mockEngine = (Engine as any).mock.instances[0];
        const mockEngineStart = mockEngine.start;

        expect(mockEngineStart).toHaveBeenCalledTimes(1);
    });
})