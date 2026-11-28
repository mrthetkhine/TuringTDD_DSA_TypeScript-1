import plus from "../src/plus";


describe('fake it till you make it',()=>{
    test('fake 5',()=>{
        expect(plus(2,3)).toBe(5);
        expect(plus(1,4)).toBe(5);
    })
    test('real',()=>{
        expect(plus(2,1)).toBe(3);
    })
})