import Computer from "../src/Computer";


describe('LogString',()=>{
   test('test sequence',()=>{

       let log = "";
       class MockedComputer extends Computer{
           readBootSector()
           {
               log+="readBootSector";
           }
           loadIntoMemory()
           {

               log+="loadIntoMemory";
           }
           runOs()
           {
               log+="runOs";
           }
       }
       let computer = new MockedComputer();
       computer.start();
       expect(log).toBe("readBootSectorloadIntoMemoryrunOs");
   })
});