import {forEach, forEachEven} from "../src/forEach";


test('forEach mock function', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    //The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);


});
test('forEachEven mock function', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEachEven([1,2,3,4], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    //The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(2);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(4);


});
test('mock test',()=>{
    const myMock1 = jest.fn();
    //const a = new myMock1();
    myMock1(1,200);
    myMock1(100,300);
    console.log('mock.instances ',myMock1.mock.instances);
    console.dir(myMock1.mock.calls)
});
test('mock bind test',()=>{
    const myMock2 = jest.fn();
    const b = {
        name:"Hello",
        message:"Welcome"
    };
    const bound = myMock2.bind(b);
    bound();
    console.log(myMock2.mock.contexts);
});
test('mock test argument',()=>{
    const mockFn = jest.fn((arg:string)=>100);
    mockFn('first arg');
    expect(mockFn.mock.calls).toHaveLength(1);

// The first arg of the first call to the function was 'first arg'
    expect(mockFn.mock.calls[0][0]).toBe('first arg');
    expect(mockFn.mock.results[0].value).toBe(100);
});