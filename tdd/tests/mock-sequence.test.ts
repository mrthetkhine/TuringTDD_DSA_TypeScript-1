import Computer from "../src/Computer";

describe('Computer',()=>{
    test('test sequence',()=>{
        let computer=new Computer();
        const readBootSector = jest.spyOn(computer, 'readBootSector');
        const loadIntoMemory = jest.spyOn(computer, 'loadIntoMemory');
        const runOs = jest.spyOn(computer, 'runOs');

        computer.start();

        expect(readBootSector.mock.invocationCallOrder[0]).toBeLessThan(
            loadIntoMemory.mock.invocationCallOrder[0]
        );
        expect(loadIntoMemory.mock.invocationCallOrder[0]).toBeLessThan(
            runOs.mock.invocationCallOrder[0]
        );
    });

});