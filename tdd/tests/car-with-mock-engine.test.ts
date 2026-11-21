import Car from "../src/Car";
import Engine,{mockStart} from "../src/__mocks__/car-mock-engine";
jest.mock('../src/__mocks__/car-mock-engine');
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (Engine as any).mockClear();
    (mockStart as any).mockClear();
});



describe('Car', () => {
    test('When car start,engine should be started',()=>{

        let engine = new Engine();
        console.log('Engine ',engine);
        let car = new Car(engine);
        car.start();

        expect(engine.start).toHaveBeenCalledTimes(1);
        /*const mockEngine = (Engine as any).mock.instances[0];
        const mockEngineStart = mockEngine.start;

        */
    });
})