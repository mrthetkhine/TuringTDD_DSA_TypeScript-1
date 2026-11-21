import {expect} from "@jest/globals";

test('mock implementation',  () => {
    const myMockFn = jest.fn()
        .mockImplementationOnce(()=>100)
        .mockImplementationOnce(()=>200);

        expect(myMockFn()).toBe(100);
        expect(myMockFn()).toBe(200);
});
test('mock return',()=>{
    const myMockFn = jest
        .fn()
        //.mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');
    //console.log(myMockFn());
    //expect(myMockFn(100)).toBe('default');
    expect(myMockFn(10)).toBe(52);
})
test('matcher ',()=>{
   let mockFunc = jest.fn();
    mockFunc('hello');
    expect(mockFunc).toHaveBeenCalled();
    expect(mockFunc).toHaveBeenCalledWith('hello');
    expect(mockFunc).toHaveBeenLastCalledWith('hello');
});