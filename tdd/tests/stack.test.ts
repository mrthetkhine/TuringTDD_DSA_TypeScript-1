import Stack from '../src/Stack';

describe("Stack",()=>{
   test("push item 1 to top",()=>{
       let stack = new Stack();
       stack.push(1);

       expect(stack.pop()).toBe(1);
       expect(stack.size()).toBe(0);
   });
    test("push item 10 to top",()=>{
        //Arrange
        let stack = new Stack();

        //Act
        let orgSize = stack.size();
        stack.push(10);

        //Assert
        expect(stack.size()).toBe(orgSize+1);
        expect(stack.pop()).toBe(10);

    });
});